import React, { Component } from "react";
//import Timer from "../FunctionalComponents/timer.js";
import changeBackground from "../FunctionalComponents/background.js";

import "./login.css";

var background = changeBackground();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    window.location.href = "/login";
  }
  render() {
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <div id="main-container">
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
