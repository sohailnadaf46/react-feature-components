import React, { useEffect, useState } from "react";
import "./index.css";

// 0 1 2   this is the structure rows and columns
// 3 4 5
// 6 7 8
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

const TicToe = () => {
  // to fill the array of squares
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleCLick(getCurrentSquare) {
    const cpySquare = [...square];
    if (getWinner(cpySquare) || cpySquare[getCurrentSquare]) return;
    cpySquare[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquare(cpySquare);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (const [a, b, c] of winningPatterns) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  function handleStart() {
    setIsXTurn(true);
    setSquare(Array(9).fill(""));
  }

  useEffect(() => {
    const winner = getWinner(square);
    if (winner) {
      setStatus(`Winner is ${winner}! please restart the game`);
    } else if (square.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game.");
    } else {
      setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
    }
  }, [square, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="rows">
        <Square value={square[0]} onClick={() => handleCLick(0)} />
        <Square value={square[1]} onClick={() => handleCLick(1)} />
        <Square value={square[2]} onClick={() => handleCLick(2)} />
      </div>
      <div className="rows">
        <Square value={square[3]} onClick={() => handleCLick(3)} />
        <Square value={square[4]} onClick={() => handleCLick(4)} />
        <Square value={square[5]} onClick={() => handleCLick(5)} />
      </div>
      <div className="rows">
        <Square value={square[6]} onClick={() => handleCLick(6)} />
        <Square value={square[7]} onClick={() => handleCLick(7)} />
        <Square value={square[8]} onClick={() => handleCLick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleStart}>Restart</button>
    </div>
  );
};

export default TicToe;
