import React from 'react';
import { useState } from 'react';

// ********************************************************************
// ************* MAIN COMPONENT - GAME *************
// ********************************************************************
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares = history[history.length - 1];

  // TO HANDLE GAMEPLAY (UPDATE BOARD)
  function handlePlay(nextSquares) {
    // 1. creates shallow copy, adds next set to array
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  
  return (
    <div className="game">
      <div className="game-board">
        {/* Rerender Board component with props */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          {/* TODO= */}
        </ol>
      </div>
    </div>
  )
}

// ***************************************************
// ************* CHILD COMPONENT - BOARD *************
// ***************************************************
function Board({xIsNext, squares, onPlay}) {

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return // end function prematurely if cell is NOT null
    }

    const nextSquares = squares.slice(); // define copy of array

    if (xIsNext === true) {
      nextSquares[index] = "X"; // update cell - X
    } else {
      nextSquares[index] = "O"; // update cell - O
    }

    onPlay(nextSquares); // update existing squares array with new array (nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  // function to help reset board
  // function reset() {
  //   setSquares(Array(9).fill(null));
  // }

  return (
    <>
      <div className="status">{status}</div>
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
      {/* <ResetButton onResetClick={() => reset()}/> */}
    </>
  );
}

// ****************************************************
// ************* CHILD COMPONENT - SQUARE *************
// ****************************************************
function Square({input, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
        {input}
      </button>
  )
}

// COMPONENT FOR RESET BUTTON
function ResetButton({onResetClick}) {
  return (
    <button className="reset-button" onClick={onResetClick}>
      Reset 
    </button>
  );
}


// ********************************************************************
// ************* calculateWinner Component *************
// ********************************************************************
function calculateWinner(squares) {
  // All possible winning combinations in TTT
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  console.log("SQUARES: " + squares);
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i]; // setting winning indexes of a, b, c
    console.log("VALUES a,b,c: " + a + ", " + b + ", " + c);
    // checking if any combination has the same value
    if (squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // returning value of winning char
    }
  }
  return null; // if no combination contains same value, no winner
}