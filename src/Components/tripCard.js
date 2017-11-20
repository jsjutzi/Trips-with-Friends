import React, { Component } from "react";
import("./tripCard.css");

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      state_country: this.props.city,
      depart_date: this.props.depart_date,
      return_date: this.props.return_date,
      display: "none"
    };
  }

  viewTrip() {}
  render() {
    return (
      <div id="trip-main-view">
        <div className="trip">
          <p id="city">
            {this.props.city}
            <span>,</span>
          </p>
          <p>{this.props.state_country}</p>
        </div>
      </div>
    );
  }
}

export default Trip;
