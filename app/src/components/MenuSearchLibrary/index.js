import React from "react";
import { Home, Search, YLibrary } from "../Ultils/Icons";

export default function MenuSearchLibrary(props) {
  return (
    <ul className="menu-search-library">
      <li className="inicio">
        <Home />
      </li>
      <li className="search">
        <Search />
      </li>
      <li className="playlist">
        <YLibrary />
      </li>
    </ul>
  );
}
