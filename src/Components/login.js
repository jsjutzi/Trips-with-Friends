import React, { Component } from "react";
import Router from "react-redux";
import Trip from "./trip1";
import NewTrip from "./newTrip";
import changeBackground from "../FunctionalComponents/background.js";

import "./login.css";

//import store from "./store";
import { connect } from "react-redux";

var background = changeBackground();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    window.location.href = "http://localhost:3001/login";
  }
  render() {
    return (
      <div id="App">
        <div
          id="main-container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div id="login-register">
            <button id="login" onClick={this.handleLogin}>
              Login
            </button>
            <button id="register" onClick={this.handleLogin}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
