import React, { Component } from "react";
import {
  getFriendsProfile,
  getFriendsImage,
  selectUserTrips
} from "../Store/reducer.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import("./friendCard.css");

class Friend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friend_user_id: this.props.friend_id,
      profile_image: this.props.image
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.friend_user_id);
    this.props.getFriendsProfile(this.state.friend_user_id);
    this.props.getFriendsImage(this.state.profile_image);
    this.props.selectUserTrips(this.props.friend_id);
  }
  render() {
    return (
      <li>
        <Link to="/friendsProfile">
          <img
            src={this.props.image}
            alt=""
            className="friend-profile-pic"
            onClick={e => {
              this.handleClick();
            }}
          />
        </Link>
      </li>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getFriendsProfile,
  getFriendsImage,
  selectUserTrips
})(Friend);
