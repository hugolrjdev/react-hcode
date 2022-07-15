import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

export default function App(props) {
  //getter - leitura, setter - gravação
  // const [title, setTitle] = useState(props.title || 'Hcode');
  const [title, setTitle] = useState(props.title || "Hcode");

  const handleClick = (text) => {
    setTitle(text);
  };

  const sendAPI = () => {
    setTitle("Chamando... a Api back-end");
    setTimeout(() => {
      setTitle("cod:200");
    }, 3000);
  };

  const login = () => {
    setTitle("Autenticando... usuário");
    setTimeout(() => {
      setTitle("Usuário autenticado com sucesso");
    }, 3000);
  };

  const register = () => {
    setTitle("Cadastrando... usuário");
    setTimeout(() => {
      setTitle("Usuário cadastrado com sucesso");
    }, 3000);
  };

  return (
    <>
      {title && <h1>{title}</h1>}
      {/*se title existir mostre isso é uma rederização condicional*/}
      <h3>Treinamentos</h3>
      <p>Aluno Hcode tem que ser especialista.</p>
      <Button
        label="Cambiar titulo"
        onClickButton={() => handleClick("Tambien estoy aprendiendo español")}
      />
      <br />
      <br />
      <Button label="Chamar Api" onClickButton={sendAPI} />
      <br />
      <br />
      <Button label="Login" onClickButton={login} />
      <Button label="Cadastre-se" onClickButton={register} />
      {/*
       * passar parâmetros para um função hendle é simples:
       * primeiro nesse caso na função handle adiciona o parâmento a função por exemplo (text)
       * segundo passo na chamada para a ação do react crie uma arrow function coloque a função handle e passe o valor do parâmetro.
       */}
    </>
  );
}
