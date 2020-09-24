import React, { Fragment } from "react";
import "./login.css";
import { InputBox } from "../components/InputBox";
import { UserLogo } from "../image_components/UserLogo";
import PasswordLogo from "../image_components/PasswordLogo";
import { Link } from "react-router-dom";
import { Background } from "./Background";
import SignIn from "../image_components/SignIn";
import { useAuth0 } from "../react-auth0-spa";

export default function Login() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <Background />
      <div className="greeting">
        <h1>Hello</h1>
        <h3>Sign in to your account</h3>
      </div>
      <div className="userSigninContainer">
        <InputBox>
          <UserLogo />
        </InputBox>
        <InputBox>
          <PasswordLogo />
        </InputBox>
        <Link to="#">
          <p className="alignTextRight greyedOut smallText">
            Forgot your password?
          </p>
        </Link>
      </div>
      <button className="signinButton">
        <Link to="/gallery">
          Sign In
          <SignIn />
        </Link>
      </button>
      <button onClick={() => loginWithRedirect({})}>Sign in</button>

      <p className="createAccountLink smallText">
        Don't have an account?
        <Link to="/register">Create</Link>
      </p>
    </>
  );
}
