import React, { Component } from "react";
import Router from "react-redux";
import Trip from "./trip1";
import NewTrip from "./newTrip";
import ProfileBar from "./profileBar";

import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo } from "../Store/reducer.js";
import moment from "moment";

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
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar user_id={this.props.user.user_id} />
        <div id="main-container">
          <NewTrip />
          <Trip />
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
