import React from 'react';
import { useState } from 'react';


// HELPER FUNCTIONS (PROPS)
function Square({input, onSquareClick}) {
  // console.log("INPUT: " + input);
  // console.log("ONSQUARECLICK: " + onSquareClick);

  return (
    <button className="square" onClick={onSquareClick}>
        {input}
      </button>
  )
}

function setSquares() {

}

// MAIN FUNCTION - Board
export default function Board() {
  // Initialise empty array for board elements
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log("SQUARES ARRAY: " + squares);
  
  function handleClick(index) {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  }


  return (
    <>
      {/* <button className="square" onClick={onSquareClick}>{input}</button> */}
      {/* onSquareClick - temp name to link Board function to onClick js keyword */}
      {/* handleClick passed to Square as a prop */}
      <div className="board-row">
        <Square input={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square input={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square input={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square input={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square input={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square input={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square input={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square input={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square input={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}
