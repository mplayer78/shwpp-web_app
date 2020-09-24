import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Gallery from "./gallery";
import Login from "./login";
import Register from "./register";
import UserDetails from "./user_details";
import New from "./add_shwpp";
import { useAuth0 } from "../react-auth0-spa";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="pageFormat">
      <Router>
        <Switch>
          {!isAuthenticated ? (
            <Route path="/">
              <Login />
            </Route>
          ) : (
            <Fragment>
              <Route path="/gallery" exact>
                <Gallery />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/user_details">
                <UserDetails />
              </Route>
              <Route path="/new">
                <New />
              </Route>
            </Fragment>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
