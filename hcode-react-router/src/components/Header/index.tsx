import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-porsche.png";
import "./header.scss";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/" className="logo" ariaLabel="Logo">
        <img src={logo} alt="Logo da Porsche" />
      </Link>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/models"> Models </Link>
          </li>
          <li>
            <Link to="/discover"> Descubra </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
