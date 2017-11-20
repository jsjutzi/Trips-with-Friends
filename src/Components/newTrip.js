import React, { Component } from "react";
import { Link } from "react-router-dom";
import("./newTrip.css");

class NewTrip extends Component {
  render() {
    return (
      <Link to="/planTrip" style={{ textDecoration: "none" }}>
        <div id="new-trip-container">
          <button id="new-trip-button">New Trip</button>
        </div>
      </Link>
    );
  }
}

export default NewTrip;
