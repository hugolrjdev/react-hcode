import React from "react";
import "./App.css";
import MainMenu from "../components/MainMenu";
import Player from "../components/Player";

export default function App(props) {
  return (
    <div className="App">
      <MainMenu />
      <Player />
    </div>
  );
}
