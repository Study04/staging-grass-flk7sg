import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function Block(props) {
  return <div className={"block" + props.color}></div>;
}

function Grid(props) {
  let blocks = [];

  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18; j++) {
      blocks.push(<Block color={(i + j) % 2 == 0 ? " lightblue" : ""} />);
    }
  }

  return <div id="grid">{blocks}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Grid />);
