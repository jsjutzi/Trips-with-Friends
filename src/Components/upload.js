import React, { Component } from "react";
import Router from "react-redux";
import ProfileBar from "./profileBar";
import changeBackground from "../FunctionalComponents/background.js";
import { getUserInfo } from "../Store/reducer.js";
import FileUploader from "../FunctionalComponents/FileUploader.js";
import moment from "moment";

import "./upload.css";

import { connect } from "react-redux";

var background = changeBackground();

class Upload extends Component {
  ComponentDidMount() {
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    return (
      <div id="App" style={{ backgroundImage: `url(${background})` }}>
        <ProfileBar />
        <div id="upload-pic-container">
          <div id="uploader-div">
            <FileUploader user_id={this.props.user.user_id} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserInfo })(Upload);
