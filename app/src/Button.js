import React from "react";

export default function Button(props) {
  return <button onClick={props.onClickButton}>{props.label}</button>;
}
