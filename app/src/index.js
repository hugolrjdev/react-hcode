import React from "react";
import ReactDOM from "react-dom";

function sendButton () {
    console.log('enviando dados...');
}

function App (props) {
    return (
        <button onClick={props.onClickButton}>{props.label}</button>
    );
}

ReactDOM.render(<App label="Enviar" onClickButton={sendButton}/>, document.getElementById('root'));
/*
 * também podemos passar o JSX via função e usar ela como se fosse um componente
 * também podemos usar props desse modo
 * também podemos usar chamada de ação 
 */