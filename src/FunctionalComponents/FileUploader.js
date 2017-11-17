import React, { Component } from "react";
import { fire as firebase } from "../Firebase/fire";
import axios from "axios";
import("./FileUploader.css");

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
      imagePreviewUrl: "",
      downloadURL: ""
    };
    this.uploadImage = this.uploadImage.bind(this);
    this.processImageUpload = this.processImageUpload.bind(this);
  }

  processImageUpload(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }
  uploadImage(event) {
    let that = this;
    event.preventDefault();
    let file = this.state.file;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child("profilePictures/" + file.name)
      .put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      function(error) {},
      function() {
        console.log(uploadTask.snapshot.downloadURL);
        that.setState({ downloadURL: uploadTask.snapshot.downloadURL });
        console.log(that.state.downloadURL);
        axios.post("/api/upload", {
          user_id: that.props.user_id,
          profile_image: that.state.downloadURL
        });
      }
    );
  }

  render() {
    console.log(this.props);
    let imagePreview = null;

    if (this.state.imagePreviewUrl) {
      imagePreview = (
        <img
          src={this.state.imagePreviewUrl}
          className="image-preview"
          alt=""
        />
      );
    }
    return (
      <div className="Upload-button">
        <form
          onSubmit={event => {
            this.uploadImage(event);
          }}
        >
          {imagePreview}
          <label>
            <input
              type="file"
              onChange={event => {
                this.processImageUpload(event);
              }}
              alt=""
            />
          </label>
          <button type="submit"> Upload Image </button>
        </form>
      </div>
    );
  }
}

export default FileUploader;
