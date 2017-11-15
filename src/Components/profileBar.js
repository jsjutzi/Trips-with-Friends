import React, { Component } from "react";
import Router from "react-redux";

import "./profileBar.css";

import { connect } from "react-redux";

class ProfileBar extends Component {
  render() {
    return (
      <div id="profile-bar-container">
        <img src={this.props.user.profile_image} />
        <div id="friends-bar" />
        <ul />
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ProfileBar);
