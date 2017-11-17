import React, { Component } from "react";
import ProfileBar from "./profileBar";
import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo } from "../Store/reducer.js";
//import moment from "moment";

import "./planTrip.css";

import { connect } from "react-redux";

var background = changeBackground();

class PlanTrip extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    console.log(this.props);
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar />
        <div id="plan-trip-container">
          <div id="input-row">
            <div className="input">
              <p id="dest-p">Destination:</p>
              <input
                id="destination"
                type="text"
                placeholder="destination"
                autocomplete="on"
              />
            </div>
            <div className="input">
              <p>Departing On:</p>
              <input id="departing" type="date" placeholder="departing on" />
            </div>
            <div className="input">
              <p>Returning On:</p>
              <input id="returning" type="date" placeholder="returning on" />
            </div>
          </div>
          <button id="confirm-trip-button" type="submit">
            Confirm Trip
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserInfo })(PlanTrip);
