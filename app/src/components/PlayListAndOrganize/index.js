import React from "react";
import { CreatePlayList, MusicLikes, YChapters } from "../Ultils/Icons"

const PlaylistAndOrganize = () => {
  return (
    <ul className="playlist-organize">
      <li className="playlist-create"><CreatePlayList /></li>
      <li className="music-likes"><MusicLikes /></li>
      <li className="chapter"><YChapters /></li>
    </ul>
  );
};

export default PlaylistAndOrganize;
