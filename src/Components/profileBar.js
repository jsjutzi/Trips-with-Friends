import React, { Component } from "react";
import { profile } from "../Images/profile-placeholder.png";
import { Link } from "react-router-dom";
import Friend from "./friendCard.js";
import add from "../Images/whiteplus.png";

import "./profileBar.css";
import { connect } from "react-redux";

class ProfileBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendEditorClass: "hide-box"
    };
  }

  showBox() {
    this.setState({ friendEditorClass: "show-box" });
  }
  hideBox() {
    this.setState({ friendEditorClass: "hide-box" });
  }

  render() {
    const friends = this.props.friends.map(friend => (
      <Friend
        key={friend.friend_id}
        image={friend.profile_image}
        friend_id={friend.friend_id}
        trips={friend.trips}
      />
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
          <ul>
            <img
              id="add"
              className="friend-profile-pic"
              src={add}
              onClick={() => {
                this.showBox();
              }}
            />
            {friends}
          </ul>
        </div>
        <div id="new-friend-box" className={this.state.friendEditorClass}>
          <p>
            Search:<input type="text" placeholder="friends email" />
          </p>
          <button id="search-users-button">Search</button>
          <button
            id="search-users-button"
            onClick={() => {
              this.hideBox();
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ProfileBar);
