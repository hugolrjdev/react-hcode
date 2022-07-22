import React from "react";
import "./App.css";
import Header from "../components/Header";
import Player from "../components/Player";

export default function App(props) {
  //JSX - Javascript Extensible Language
  // syntatic sugar

  const appData = {
    title: "Hcode React Developer - 2022",
    link: "https://www.hcode.com.br"
  }

  return(
    <div className="App">
        <Header title={appData.title} link={appData.link} />
        <Player />
    </div>
  );
}
