import React, { Component } from "react";
import Router from "react-redux";
import axios from "axios";
import profile from "../Images/profile-placeholder.png";
import FileUploader from "../FunctionalComponents/FileUploader.js";
import add from "../Images/plus.png";
import { Link } from "react-router-dom";

import "./profileBar.css";

import { connect } from "react-redux";

class ProfileBar extends Component {
  // componentDidMount(props) {
  //   let user_id = this.props.user.user_id;
  //   axios.post("/api/getPhoto", { user_id });
  // }
  render() {
    return (
      <div id="profile-bar-container">
        <figure>
          <Link to="/profile">
            <img id="profile-pic" src={this.props.user.profile_image} />
          </Link>
          <figcaption>
            <Link id="link" to="/upload">
              Upload Pic
            </Link>
          </figcaption>
        </figure>
        <div id="friends-bar" />
        <ul>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
          <li>
            <img className="friend-profile-pic" src={profile} />
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(ProfileBar);
