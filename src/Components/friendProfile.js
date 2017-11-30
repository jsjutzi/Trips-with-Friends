import React, { Component } from "react";
import Trip from "./tripCard";
import NewTrip from "./newTrip";
import ProfileBar from "./profileBar";

import changeBackground from "../FunctionalComponents/background.js";
import {
  getUserInfo,
  getUserFriends,
  getUserTrips,
  selectUserTrips
} from "../Store/reducer.js";
//import moment from "moment";

import "./friendProfile.css";

import { connect } from "react-redux";

var background = changeBackground();

class FriendProfile extends Component {
  async componentDidMount() {
    await this.props.selectUserTrips(this.props.selectedUser);
  }

  render() {
    console.log(this.props.selectedUserTrips);
    const friendTrips = this.props.selectedUserTrips.map(trip => {
      return (
        <Trip
          key={trip.trip_id}
          city={trip.city}
          state_country={trip.state_country}
          trip_id={trip.trip_id}
        />
      );
    });
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar key="user_id" user_id={this.props.user.user_id} />
        <img id="friend-page-profile-pic" src={this.props.selectedUserImage} />
        <div id="main-container">{friendTrips}</div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getUserInfo,
  getUserTrips,
  selectUserTrips
})(FriendProfile);