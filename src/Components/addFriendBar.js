import React, { Component } from "react";
import { connect } from "react-redux";

class AddFriendBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      display_name: this.props.displayName,
      showFriendBar: false,
      showNoResults: false
    };
  }
  componentDidMount() {
    if (this.props.key != this.props.user.user_id) {
      this.setState({ showFriendBar: true });
    }
  }

  render() {
    return;
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(AddFriendBar);
