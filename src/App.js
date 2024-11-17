import React from 'react';
import { useState } from 'react';


// SQUARE COMPONENT (Function / Reusable code)
// Props - parameters (inputs to functions)
function Square({input, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
        {input}
      </button>
  )
}

// MAIN FUNCTION - Board (Parent Component)
export default function Board() {
  // Initialise squares array + provide function to update squares array (setSquares)
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log("SQUARES ARRAY: " + squares);
  
  function handleClick(index) {
    const nextSquares = squares.slice(); // define copy of array
    nextSquares[index] = "X"; // update existing 
    setSquares(nextSquares); // update existing squares array with new array (nextSquares)
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
