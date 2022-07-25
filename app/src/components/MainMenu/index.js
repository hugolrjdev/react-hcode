import React from "react";

const playlists = [
  "Metal",
  "Churras de Sexta",
  "Cafezinho",
  "A-ha Radio",
  "Elegant Affer",
  "Rock",
  "Metal en Espanhol",
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
        <div className="icons"></div>
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
