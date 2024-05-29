import React from "react";
import "./index.css";

// 0 1 2   this is the structure rows and columns
// 3 4 5
// 6 7 8
function Square({ value }) {
  return <button className="square">{value}</button>;
}

const TicToe = () => {
  return (
    <div className="tic-tac-toe-container">
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="rows">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default TicToe;
