import React, { Component } from "react";
import { connect } from "react-redux";
import("./friendCard.css");

class Friend extends Component {
  render() {
    return (
      <li>
        <img src={this.props.image} alt="" className="friend-profile-pic" />
      </li>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Friend);
