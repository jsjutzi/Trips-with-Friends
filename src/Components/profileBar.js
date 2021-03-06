import React, { Component } from "react";
import { profile } from "../Images/profile-placeholder.png";
import { Link } from "react-router-dom";
import AddFriendBar from "./addFriendBar.js";
import axios from "axios";

import Friend from "./friendCard.js";
import add from "../Images/whiteplus.png";
import { searchFriends } from "../Store/reducer.js";

import "./profileBar.css";
import { connect } from "react-redux";

class ProfileBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendEditorClass: "hide-box",
      friendName: "",
      noResultShower: "hide-box"
    };
  }

  showBox() {
    this.setState({ friendEditorClass: "show-box" });
  }
  hideBox() {
    this.setState({ friendEditorClass: "hide-box" });
  }
  updateName(value) {
    this.setState({ friendName: value });
  }
  searchFriends() {
    const nameObj = { display_name: this.state.friendName };
    this.props.searchFriends(nameObj);
    this.props.selectedNewFriend
      ? this.setState({ noResultShower: "" })
      : false;
  }

  render() {
    const addFriends = this.props.selectedNewFriend.map(friend => {
      return (
        <AddFriendBar
          key={friend.user_id}
          user_id={friend.user_id}
          image={friend.profile_image}
          displayName={friend.display_name}
        />
      );
    });
    const friends = this.props.friends.map(friend => {
      return (
        <Friend
          key={friend.friend_id}
          image={friend.profile_image}
          friend_id={friend.friend_id}
          trips={friend.trips}
        />
      );
    });
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
              alt=""
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
            Search:<input
              type="text"
              placeholder="friends name"
              onChange={e => {
                this.updateName(e.target.value);
              }}
            />
          </p>
          <button
            id="search-users-button"
            onClick={() => {
              this.searchFriends();
            }}
          >
            Search
          </button>
          <button
            id="search-users-button"
            onClick={() => {
              this.hideBox();
            }}
          >
            Close
          </button>
          <div>
            {addFriends}
            <p className={this.state.noResultShower}>No Results</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  searchFriends
})(ProfileBar);
