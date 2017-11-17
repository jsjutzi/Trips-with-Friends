import React, { Component } from "react";
import("./tripCard.css");

class Trip extends Component {
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
