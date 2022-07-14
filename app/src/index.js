import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
React.createElement("button", {label: "enviar"}, "clique aqui para enviar")
, document.getElementById('root'));
/*
 * primeiro parametro o App Principal
 * pode-se usa-lo para fazer a chamada de outros componentes que vão formar o layout final
 * o segundo parametro é onde ele irá renderizar no index.html se você procurar lá terá uma div com:
 * <div id="root"></div>
 * document.getElementById('root') esperamos que saiba como funciona.
 */