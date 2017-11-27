import React, { Component } from "react";
import Trip from "./tripCard";
import NewTrip from "./newTrip";
import ProfileBar from "./profileBar";

import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo, getUserFriends, getUserTrips } from "../Store/reducer.js";
//import moment from "moment";

import "./profile.css";

import { connect } from "react-redux";

var background = changeBackground();

class Profile extends Component {
  async componentDidMount() {
    await this.props.getUserInfo();
    this.props.getUserFriends(this.props.user.user_id);
    this.props.getUserTrips(this.props.user.user_id);
  }

  render() {
    const trips = this.props.trips.map(trip => (
      <Trip
        key={trip.trip_id}
        city={trip.city}
        state_country={trip.state_country}
        trip_id={trip.trip_id}
      />
    ));
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar key="user_id" user_id={this.props.user.user_id} />
        <div id="main-container">
          <NewTrip />
          {trips}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getUserInfo,
  getUserFriends,
  getUserTrips
})(Profile);
