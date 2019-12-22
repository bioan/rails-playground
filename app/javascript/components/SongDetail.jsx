import React, { Component } from "react";

class SongDetail extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>
          {this.props.artist} - {this.props.year}
        </h3>
        <p>{this.props.lyrics}</p>
      </div>
    );
  }
}

export default SongDetail;
