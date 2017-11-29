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
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.user_id,
      city: "",
      state_country: "",
      depart_date: "",
      return_date: "",
      trip_id: this.props.selectedTrip.trip_id,
      classes: "hiddenOption"
    };
    this.open;
  }
  componentDidMount() {
    getFriendsOnTrip(this.props.selectedTrip.trip_id);
    console.log(this.props.selectedTrip.trip_id);
  }
  cancelTrip() {
    const tripObj = {
      trip_id: this.props.selectedTrip.trip_id,
      user_id: this.props.user.user_id
    };
    console.log(tripObj);
    axios.post(`/api/cancelTrip`, tripObj).then(() => {
      this.props.history.push("/profile");
    });
  }
  openEditor() {
    this.setState({ classes: "opened" });
  }
  closeEditor() {
    axios.post("/api/editTrip", this.state).then(() => {
      this.props.history.push("/profile");
    });
    this.setState({ classes: "hiddenOption" });
  }
  cancelEditor() {
    this.setState({ classes: "hiddenOption" });
  }
  joinTrip() {
    const tripObj = {
      user_id: this.props.user.user_id,
      city: this.props.selectedTrip.city,
      state_country: this.props.selectedTrip.state_country,
      depart_date: this.props.selectedTrip.depart_date,
      return_date: this.props.selectedTrip.return_date,
      trip_id: this.props.selectedTrip.trip_id
    };
    axios.post("/api/joinTrip", tripObj).then(() => {
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
          <div className={this.state.classes}>
            <p>New City:</p>
            <input
              type="text"
              placeholder="city"
              onChange={e => this.setState({ city: e.target.value })}
            />
            <p>New State/Country: </p>
            <input
              type="text"
              placeholder="state/country"
              onChange={e => this.setState({ state_country: e.target.value })}
            />
            <p>New Departure: </p>
            <input
              type="date"
              onChange={e => this.setState({ depart_date: e.target.value })}
            />
            <p>New Return: </p>
            <input
              type="date"
              onChange={e => this.setState({ return_date: e.target.value })}
            />
            <button
              className="update-trip-button"
              onClick={e => {
                this.closeEditor();
              }}
            >
              Confirm
            </button>
            <button
              className="update-trip-button"
              onClick={e => {
                this.cancelEditor();
              }}
            >
              Cancel
            </button>
          </div>
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
            <div id="with-friends" />
            <div className="button-bar">
              <button
                className="trip-buttons"
                onClick={e => {
                  this.openEditor();
                }}
              >
                Edit Trip
              </button>
              <button
                className="trip-buttons"
                onClick={e => {
                  this.joinTrip();
                }}
              >
                Join Trip
              </button>
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
