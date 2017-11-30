import React, { Component } from "react";
import { connect } from "react-redux";
import { getSelectedTrip } from "../Store/reducer.js";
import { Link, withRouter } from "react-router-dom";
import("./tripCard.css");

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip_id: this.props.trip_id
    };
  }

  render() {
    return (
      <div
        id="trip-main-view"
        onClick={e =>
          this.props.getSelectedTrip(this.state.trip_id).then(() => {
            this.props.history.push("/tripView");
          })
        }
      >
        <div className="trip">
          <p id="city" className="trip-text">
            {this.props.city}
            <span>,</span>
          </p>
          <p className="trip-text">{this.props.state_country}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getSelectedTrip
})(withRouter(Trip));
