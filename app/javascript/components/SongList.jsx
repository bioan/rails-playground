import React, { Component } from "react";
import SongItem from "./SongListItem";

class SongList extends Component {
  state = {
    songs: [
      { id: 1, title: "Last Christmas", artist: "Wham!" },
      { id: 2, title: "Never Gonna Give You Up", artist: "Rick Astley" }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.songs.map(song => (
          <li key={song.id}>
            <SongItem id={song.id} title={song.title} artist={song.artist} />
          </li>
        ))}
      </ul>
    );
  }
}

export default SongList;
