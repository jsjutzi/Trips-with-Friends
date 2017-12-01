import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserFriends } from "../Store/reducer.js";
import "./addFriend.css";
import axios from "axios";

class AddFriendBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      display_name: this.props.displayName,
      showFriendBar: "showing",
      showNoResults: "hidden"
    };
  }
  componentDidMount() {
    if (this.props.key && this.props.key !== this.props.user.user_id) {
      this.setState({ showFriendBar: "hiding" });
    }
  }
  addFriendClick() {
    const newFriendObj = {
      user_id: this.props.user.user_id,
      friend_id: this.props.user_id
    };
    const reverseFriendObj = {
      user_id: this.props.user_id,
      friend_id: this.props.user.user_id
    };
    axios
      .post("/api/newFriends", newFriendObj)
      .then(() => this.setState({ showFriendBar: "hidden" }))
      .then(() => this.props.getUserFriends(this.props.user.user_id));
    axios.post("/api/newFriends", reverseFriendObj);
  }
  nopeClick() {
    this.setState({ showFriendBar: "hidden" });
  }
  render() {
    return (
      <div id="add-friend-row" className={this.state.showFriendBar}>
        <p className={this.state.showNoResults}>No Results Found</p>
        <img src={this.props.image} id="add-new-friend-pic" />
        <p id="display-name">{this.state.display_name}</p>
        <div id="add-nope-buttons">
          <button
            id="add-searched-friend"
            className="add-nope-buttons-design"
            onClick={() => {
              this.addFriendClick();
            }}
          >
            Add
          </button>
          <button
            id="deny-searched-friend"
            className="add-nope-buttons-design"
            onClick={() => {
              this.nopeClick();
            }}
          >
            Nope
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserFriends })(AddFriendBar);
