import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Components/login.js";
import Profile from "./Components/profile.js";

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Profile} path="/profile" />
  </Switch>
);
