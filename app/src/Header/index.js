/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
export default function Header(props) {
  return (
    <header className="App-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="React development 2022"
        width="100"
      />
      <div className="App-info">
        <p>Seja bem vindo ao curso de <strong>{props.title}</strong></p>
        <a
            href={props.link}
            className="App-link"
            target="_black"
            rel="noopener noreferrer"
        >
            Learn React 18 -
            {
            new Date().toLocaleDateString()
            /*dentro de chaves pode se usar quais quer expressões javascript*/
            }
        </a>
      </div>
    </header>
  );
}
