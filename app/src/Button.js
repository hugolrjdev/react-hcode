import React from "react";

function sendButton() {
  console.log("enviando dados...");
}

export default function Button(props) {
  return <button onClick={props.onClickButton}>{props.label}</button>;
}
