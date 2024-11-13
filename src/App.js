import React from 'react';

function Square({ input }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {input}
    </button>
  )
}
  
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square input="1"/>
        <Square input="2"/>
        <Square input="3"/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}
