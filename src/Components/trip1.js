import React, { Component } from "react";
import("./trip1.css");

class Trip extends Component {
  render() {
    return (
      <div id="trip-main-view">
        <div className="trip">
          <p id="city">
            Denpasur<span>,</span>
          </p>
          <p> Indonesia</p>
        </div>
      </div>
    );
  }
}

export default Trip;
