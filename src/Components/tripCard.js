import React, { Component } from "react";
import { connect } from "react-redux";
import { getSelectedTrip } from "../Store/reducer.js";
import { Link } from "react-router-dom";
import("./tripCard.css");

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_id: this.props.trip_id
    };
  }

  render() {
    console.log(this.state);
    return (
      <Link
        to={`/tripView`}
        className="link"
        style={{ textDecoration: "none" }}
        onClick={e => this.props.getSelectedTrip(this.state.trip_id)}
      >
        <div id="trip-main-view">
          <div className="trip">
            <p id="city" className="trip-text">
              {this.props.city}
              <span>,</span>
            </p>
            <p className="trip-text">{this.props.state_country}</p>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getSelectedTrip
})(Trip);
