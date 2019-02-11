import React, { Component } from "react";
import "./App.css";

class Download extends Component {
  render() {
    return (
      <div className="downloadB">
        <a href={this.props.image.links.download + "?force=true"}>Download</a>
      </div>
    );
  }
}

export default Download;
