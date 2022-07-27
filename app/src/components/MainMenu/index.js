import React from "react";
import { Logo } from "../Ultils/Logo";
import MenuSearchLibrary from "../MenuSearchLibrary";
import PlaylistAndOrganize from "../PlayListAndOrganize";

import "./MainMenu.css";

const playlists = [
  "Metal",
  "Churras de Sexta",
  "Cafezinho",
  "A-ha Radio",
  "Elegant Affer",
  "Rock",
  "Metal en Espanhol",
  "The beast Metallica",
  "The beast Iron Maider",
  "The beast Dream Evil",
  "The beast João Gomes",
  "The beast Tarcisio do Acordeon",
  "The beast Arenia",
  "The beast Maneskin",
  "The beast Desturbed",
  "The beast System of Donw",
];

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "pt-br" };
    this.handleNewPlayList = this.handleNewPlayList.bind(this);
  }
  render() {
    this.setState({ language: "en" });
    return (
      <div className="mainMenu">
        <div className="logo">
          <Logo />
        </div>
        <div className="icons">
          <MenuSearchLibrary />
          <PlaylistAndOrganize />
        </div>
        <div className="playlists">
          <ul>
            {playlists.map((playlist, index) => (
              <li key={index}>
                <a href={`#?playlist=${playlist}`} key={index}>
                  {playlist}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={this.handleNewPlayList}>Nova PlayList</button>
      </div>
    );
  }

  handleNewPlayList(e) {
    alert("adicionando nova PlayList");
  }
}
