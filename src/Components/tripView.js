import React, { Component } from "react";
import ProfileBar from "./profileBar";

import changeBackground from "../FunctionalComponents/background.js";
import {
  getUserInfo,
  getUserFriends,
  getUserTrips,
  selectedTrip
} from "../Store/reducer.js";

import "./tripView.css";

import { connect } from "react-redux";

var background = changeBackground();

class TripView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state_country: "",
      depart_date: "",
      return_date: ""
    };
  }
  componentDidMount() {
    if (this.props.selectedTrip) {
      this.setState({
        city: this.props.selectedTrip.city,
        state_country: this.props.selectedTrip.state_country,
        depart_date: this.props.selectedTrip.depart_date,
        return_date: this.props.selectedTrip.return_date
      });
      console.log(this.state);
      console.log(this.props);
    }
  }

  render() {
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar key="user_id" user_id={this.props.user.user_id} />
        <div id="main-container" />
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getUserInfo,
  getUserFriends,
  getUserTrips,
  selectedTrip
})(TripView);
