import React, { useState } from 'react';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (sq) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let l of lines) {
      const [a, b, c] = l;
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
    }
    return null;
  };
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    if (winner || board[i]) return;
    const b = board.slice();
    b[i] = xIsNext ? 'X' : 'O';
    setBoard(b); setXIsNext(!xIsNext);
  };
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>{winner ? `Переможець: ${winner}` : `Хід: ${xIsNext ? 'X' : 'O'}`}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 80px)', gap: '5px', justifyContent: 'center' }}>
        {board.map((v, i) => (
          <button key={i} onClick={() => handleClick(i)} style={{ width: '80px', height: '80px', fontSize: '24px' }}>{v}</button>
        ))}
      </div>
      <button onClick={() => setBoard(Array(9).fill(null))} style={{ marginTop: '15px' }}>Очистити</button>
    </div>
  );
};

export default Game;