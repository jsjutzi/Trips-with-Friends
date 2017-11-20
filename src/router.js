import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Components/login.js";
import Profile from "./Components/profile.js";
import PlanTrip from "./Components/planTrip.js";
import Upload from "./Components/upload.js";
import TripView from "./Components/tripView.js";

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Profile} path="/profile" />
    <Route component={PlanTrip} path="/planTrip" />
    <Route component={Upload} path="/upload" />
    <Route component={TripView} path="/tripView" />
  </Switch>
);
