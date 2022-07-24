import React from "react";
import imgAlbum from "../../assets/images/dream-evil-album.jpg";
import {
  Favorite,
  RandomMusic,
  BackMusic,
  Play,
  NextMusic,
  RepeatMusic,
  ProgressPlayerMusic,
  QueueMusic,
  DivicesForPlay,
  Volume,
} from "../Ultils/Icons"; // como o favorite não foi exportado com default tem que ser chamado obrigatoriamente por desconstrução

import "./style.css";

/**
 * criar elementos restantes pode usar input progress como exemplo
 */
export default function Player() {
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
            <Play />
          </div>
          <div className="control__avancar_musica">
            <NextMusic />
          </div>
          <div className="control__repetir_musica">
            <RepeatMusic />
          </div>
        </div>
        <ProgressPlayerMusic />
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
