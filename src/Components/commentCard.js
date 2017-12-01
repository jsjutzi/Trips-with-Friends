import React, { Component } from "react";
import {
  getFriendsProfile,
  getFriendsImage,
  getTripComments
} from "../Store/reducer.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";
import("./commentCard.css");

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenClass: "hidden"
    };
  }
  componentDidMount() {
    this.props.user.user_id === this.props.author
      ? this.setState({ hiddenClass: "hidden" })
      : this.setState({ hiddenClass: "" });
  }
  deleteComment() {
    axios.get(`/api/deleteComment/${this.props.comment_id}`);
    this.props.getTripComments(this.props.selectedTrip.trip_id);
  }
  render() {
    return (
      <div id="comment-card-box">
        <img id="author-image" src={this.props.image} />
        <p id="comment-text">{this.props.text}</p>
        <p id="date">{moment(this.props.date).format("dddd, MMMM Do YYYY")}</p>
        <button
          id="delete-comment"
          className={this.hiddenClass}
          onClick={() => {
            this.deleteComment();
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getFriendsProfile,
  getFriendsImage,
  getTripComments
})(Comment);
