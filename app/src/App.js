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
    <React.Fragment>
      {title && <h1>{title}</h1>}
      <h3>Treinamentos</h3>
      <p>
        testes de aprendizagem com react pois aluno hcode tem que ser
        especialista
      </p>
      <Button 
        onClickButton={() => handleClick('novo titulo')}
        label="trocar titulo"
      />
      <Button 
        label="Conectar com RestAPI"
        onClickButton={sendAPI}
        />
      <Button 
        label="Cadastrar usuário"
        onClickButton={register}
       />
      <Button 
        label="Logar usuário"
        onClickButton={login}
       />
     
    </React.Fragment>
  );
}
