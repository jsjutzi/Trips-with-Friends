import React, { Component } from "react";
import Router from "react-redux";
import Trip from "./trip1";
import NewTrip from "./newTrip";
import ProfileBar from "./profileBar";
import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo } from "../Store/reducer.js";

import "./profile.css";

import { connect } from "react-redux";

var background = changeBackground();

class Profile extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    console.log(this.props);
    return (
      <div id="App">
        <div
          id="main-container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <ProfileBar />
          <NewTrip />
          <Trip />
          <Trip />
          <Trip />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserInfo })(Profile);
