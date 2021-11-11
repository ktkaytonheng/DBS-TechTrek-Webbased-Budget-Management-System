import React from "react";
import Button from "./Button";

function Clicker({ onClick, count }) {
  return (
    <div className="Clicker">
      <h1>Clicker</h1>
      <Button text="Click Me!" onClick={onClick} />
      <h3>{count}</h3>
    </div>
  );
}

export default Clicker;
