import React from "react";
import { Home, Search, YLibrary } from "../Ultils/Icons";

const mainMenuIcons = [
  { icon: <Home />, label: "Início", link: "/home" },
  { icon: <Search />, label: "Buscar", link: "/home" },
  { icon: <YLibrary />, label: "Sua Biblioteca", link: "/home" },
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
