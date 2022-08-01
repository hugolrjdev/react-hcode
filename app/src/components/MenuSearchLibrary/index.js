import React from "react";
import { Home, Search, YLibrary, CreatePlayList, MusicLikes, YChapters } from "../Ultils/Icons";

const mainMenuIcons = [
  { icon: <Home />, label: "Início", link: "/home" },
  { icon: <Search />, label: "Buscar", link: "/home" },
  { icon: <YLibrary />, label: "Sua Biblioteca", link: "/home" },
  { icon: <CreatePlayList />, label: "Criar playlist", link: "/home" },
  { icon: <MusicLikes />, label: "Músicas Curtidas", link: "/home" },
  { icon: <YChapters />, label: "Seus episódios", link: "/home" },
];

export default function MenuSearchLibrary(props) {
  return (
    <ul className="menu-search-library">
      {mainMenuIcons.map((icon, index) => (
        <li key={index}>
          <a href={icon.link}>
            {icon.icon}
            <span>{icon.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
