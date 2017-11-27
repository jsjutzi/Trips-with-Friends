import React, { Component } from "react";
import ProfileBar from "./profileBar";
import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo, addNewTrip } from "../Store/reducer.js";
//import moment from "moment";

import "./planTrip.css";

import { connect } from "react-redux";

var background = changeBackground();

class PlanTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      city: "",
      state_country: "",
      depart_date: "",
      return_date: ""
    };
  }
  componentDidMount() {
    this.props.getUserInfo().then(result => {
      this.setState({ user_id: result.value.data.user_id });
    });
  }
  redirector() {
    this.props.history.push("/profile");
  }

  render() {
    const { addNewTrip } = this.props;
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar />
        <div id="plan-trip-container">
          <div id="input-row">
            <div className="input">
              <p id="dest-p">City:</p>
              <input
                id="destination"
                type="text"
                placeholder="destination"
                onChange={e => this.setState({ city: e.target.value })}
              />
            </div>
            <div className="input">
              <p>State/Country:</p>
              <input
                id="state_country"
                type="text"
                placeholder="state/country"
                onChange={e => this.setState({ state_country: e.target.value })}
              />
            </div>
            <div className="input">
              <p>Departing On:</p>
              <input
                id="departing"
                type="date"
                placeholder="departing on"
                onChange={e => this.setState({ depart_date: e.target.value })}
              />
            </div>
            <div className="input">
              <p>Returning On:</p>
              <input
                id="returning"
                type="date"
                placeholder="returning on"
                onChange={e => this.setState({ return_date: e.target.value })}
              />
            </div>
          </div>
          <button
            id="confirm-trip-button"
            type="submit"
            onClick={e => {
              addNewTrip(this.state);
              this.redirector();
            }}
          >
            Confirm Trip
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserInfo, addNewTrip })(PlanTrip);
