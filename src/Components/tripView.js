import React, { Component } from "react";
import ProfileBar from "./profileBar";
import moment from "moment";
import axios from "axios";

import changeBackground from "../FunctionalComponents/background.js";
import {
  getUserInfo,
  getUserFriends,
  getUserTrips,
  getSelectedTrip,
  getFriendsOnTrip
} from "../Store/reducer.js";

import "./tripView.css";

import { connect } from "react-redux";

var background = changeBackground();

class TripView extends Component {
  componentDidMount() {
    getFriendsOnTrip(this.props.selectedTrip.trip_id);
    console.log(this.props.selectedTrip.trip_id);
  }
  cancelTrip() {
    axios.get(`/api/cancelTrip/${this.props.selectedTrip.trip_id}`).then(() => {
      this.props.history.push("/profile");
    });
  }

  render() {
    const {
      city,
      state_country,
      depart_date,
      return_date,
      trip_id
    } = this.props.selectedTrip;

    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar key="user_id" user_id={this.props.user.user_id} />
        <div id="main-container">
          <div id="specific-trip-info">
            <p id="destination-view">
              {city}, {state_country}
            </p>
            <div className="times">
              <p>{moment(depart_date).format("dddd, MMMM Do YYYY")}</p>
              <p>To</p>
              <p>{moment(return_date).format("dddd, MMMM Do YYYY")}</p>
            </div>
            <div id="time-left">
              <p>Leaving in {moment(depart_date).fromNow("dd")}</p>
            </div>
            <div className="button-bar">
              <button className="trip-buttons">Edit Trip</button>
              <button
                className="trip-buttons"
                onClick={e => {
                  this.cancelTrip();
                }}
              >
                Cancel Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {
  getUserInfo,
  getUserFriends,
  getUserTrips,
  getSelectedTrip,
  getFriendsOnTrip
})(TripView);
