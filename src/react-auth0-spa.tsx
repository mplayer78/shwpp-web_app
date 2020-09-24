import React, { Children, useContext, useEffect, useState } from "react";

import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
  RedirectLoginResult,
} from "@auth0/auth0-spa-js";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

type ContextProps = {
  isAuthenticated: boolean;
  loading: boolean;
  user: any;
  popupOpen: boolean;
  loginWithPopup: (params?: {}) => Promise<void>;
  handleRedirectCallback: Function;
  getIdTokenClaims: Function;
  loginWithRedirect: Function;
  getTokenSilently: Function;
  getTokenWithPopup: Function;
  logout: Function;
};
export const Auth0Context = React.createContext<Partial<ContextProps>>({});

export const useAuth0 = () => useContext(Auth0Context);

interface Auth0PropTypes extends Auth0ClientOptions {
  children: React.ReactNode;
  onRedirectCallback: (x: RedirectLoginResult) => void;
}

export const Auth0Provider = (props: Auth0PropTypes) => {
  const { children, onRedirectCallback, ...initOptions } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0Client]: [
    undefined | Auth0Client,
    React.Dispatch<React.SetStateAction<undefined | Auth0Client>>
  ] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0Client(auth0FromHook);
      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }
      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }
      setLoading(false);
    };
    initAuth0();
  }, []);
  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      if (auth0Client && auth0Client?.loginWithPopup) {
        await auth0Client.loginWithPopup(params);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client?.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };
  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client?.handleRedirectCallback();
    const user = await auth0Client?.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client?.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client?.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client?.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client?.getTokenWithPopup(...p),
        logout: (...p) => auth0Client?.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
