import React from "react";
import { Logo } from "../Ultils/Logo";
import MenuSearchLibrary from "../MenuSearchLibrary";

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
    this.state = { language: "pt-br", welcome: "Bem-vindo ao Spotify" };
    this.handleNewPlayList = this.handleNewPlayList.bind(this);
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
    this.componentDidMount();
  }

  componentDidMount() {
    document.title = `Spotify - ${this.state.welcome}`;
  }

  componentDidUpdate() {
    document.title = `Alterou Spotify - ${this.state.welcome}`;
  }

  componentAMount() {
    document.title = `Desmontou Spotify - ${this.state.welcome}`;
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
        <button onClick={this.handleUpdateTitle}>Nova PlayList</button>
      </div>
    );
  }

  handleNewPlayList(e) {
    alert("adicionando nova PlayList");
  }

  handleUpdateTitle(e) {
    this.setState({ welcome: "Alterando por Exemplo" });
    console.log("alterando");
  }
}
