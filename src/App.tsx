import { useEffect, useState } from 'react';
import './App.css';
import { Board as BoardModel } from './app-models/Board';
import Board from './components/Board/Board';

function App() {
  const [board, setBoard] = useState(new BoardModel());

  useEffect(() => {
    restart();
  }, [])

  const restart = () => {
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <Board board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
