import React, { Component } from "react";
import("./newTrip.css");

class NewTrip extends Component {
  render() {
    return (
      <div id="new-trip-container">
        <button id="new-trip-button">New Trip</button>
      </div>
    );
  }
}

export default NewTrip;
