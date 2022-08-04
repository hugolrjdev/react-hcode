import React, { useEffect, useState } from "react";
import imgAlbum from "../../assets/images/dream-evil-album.jpg";
import {
  Favorite,
  RandomMusic,
  BackMusic,
  Play,
  Pause,
  NextMusic,
  RepeatMusic,
  QueueMusic,
  DivicesForPlay,
} from "../Ultils/Icons";
import { ProgressPlayerMusic } from "../ProgressPlayerMusic";
import { Volume } from "../Volume";
import "./Player.css";

export default function Player(props) {
  const play = () => {
    console.log("clicou no play não alterou o estado");
  };
  const [count, setCount] = useState(0);
  const [music, setMusic] = useState(props.music);

  useEffect(() => {
    //execultando pela primeira vez
    document.title = `Tocando - ${music.title}`;
    //sempre que existir uma alteração de estado ele é execultado novamente.
    console.log(`execultou ${count}x`);
  });

  return (
    <div className="player">
      <div className="album">
        <img src={imgAlbum} alt="Album" />
        <div className="album-info">
          <strong>Dream Evil</strong>
          <span>Dragon Slayer</span>
        </div>
        <Favorite />
      </div>
      <div className="controls">
        <div className="control-midia">
          <div className="control__aleatorio">
            <RandomMusic />
          </div>
          <div className="control__voltar-musica">
            <BackMusic />
          </div>
          <div className="control__play">
            <Play eventClick={play} />
          </div>
          <div className="control__avancar_musica">
            <NextMusic />
          </div>
          <div className="control__repetir_musica">
            <RepeatMusic />
          </div>
        </div>
        <ProgressPlayerMusic progress="18" />
      </div>
      <div className="options-control">
        <div className="options-control__fila-de-musicas">
          <QueueMusic />
        </div>
        <div className="options-control__dispositivos-a-tocar">
          <DivicesForPlay />
        </div>
        <Volume />
      </div>
    </div>
  );
}
