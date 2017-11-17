import React, { Component } from "react";
import profile from "../Images/profile-placeholder.png";
import { Link } from "react-router-dom";
import Friend from "./friendCard.js";

import "./profileBar.css";
import { connect } from "react-redux";

class ProfileBar extends Component {
  render() {
    console.log(this.props.friends);
    const friends = this.props.friends.map(friend => (
      <Friend key={friend.friend_id} image={friend.profile_image} />
    ));
    return (
      <div id="profile-bar-container">
        <figure>
          <Link to="/profile">
            <img
              id="profile-pic"
              src={this.props.user.profile_image}
              alt={profile}
            />
          </Link>
          <figcaption>
            <Link id="link" to="/upload">
              Upload Pic
            </Link>
          </figcaption>
        </figure>
        <div id="friends-bar">
          <ul>{friends}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ProfileBar);
