import React from "react";
import imgAlbum from "../../assets/images/dream-evil-album.jpg";
import { Favorite } from "../Ultils/icons/Favorite"; // como o favorite não foi exportado com default tem que ser chamado obrigatoriamente por desconstrução
/**
 * criar elementos restantes pode usar input progress como exemplo
 */
export default function Player(){
    return(
        <div>
            <div className="album">
                <img src={imgAlbum} alt="Album"  />
                <div className="album-info">
                    <strong>Dream Evil</strong>
                    <span>Dragon Slayer</span>
                </div>
                <Favorite />
            </div>
            <div className="controls"></div>
            <div className="options-control"></div>
        </div>
    );
}