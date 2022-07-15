import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

export default function App(props) {
  //getter - leitura, setter - gravação
  // const [title, setTitle] = useState(props.title || 'Hcode');
  const [title, setTitle] = useState(props.title || "Hcode");

  const handleClick = () => {
    setTitle("Estoy Aprendendo Espanhol");
  };

  return (
    <>
      {title && <h1>{title}</h1>}{" "}
      {/*se title existir mostre isso é uma rederização condicional*/}
      <h3>Treinamentos</h3>
      <p>Aluno Hcode tem que ser especialista.</p>
      <Button label="mudando titulo" onClickButton={handleClick} />
    </>
  );
}
