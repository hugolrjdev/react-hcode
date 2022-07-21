import React from "react";
import "./App.css";
import Header from "./Header";

export default function App(props) {
  //JSX - Javascript Extensible Language
  // syntatic sugar

  const appData = {
    title: "Hcode React Developer - 2022",
    link: "https://www.hcode.com.br"
  }
 return(
      <Header title={appData.title} link={appData.link} />
 );
}
