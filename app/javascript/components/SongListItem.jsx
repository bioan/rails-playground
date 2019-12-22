import React, { Component } from "react";

class SongItem extends Component {
  state = {};
  render() {
    return (
      <div onClick={this.goToDetails}>
        <h2>{this.props.title}</h2>
        <h3>{this.props.artist}</h3>
      </div>
    );
  }

  goToDetails = () => {
    var xhr = new XMLHttpRequest();
    let dest = window.location.href + this.props.id;
    console.log(dest);
    xhr.open("GET", dest);
    xhr.send();
  };
}

export default SongItem;
