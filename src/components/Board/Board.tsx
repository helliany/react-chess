import React, { FC, useEffect, useState } from "react";
import { Board as BoardModel } from "../../models/Board";
import { Cell as CellModel } from "../../models/Cell";
import { Player } from "../../models/Player";
import Cell from "../Cell/Cell";

interface BoardProps {
  board: BoardModel;
  setBoard: (board: BoardModel) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const Board: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);

  const handleClickCell = (cell: CellModel) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopy();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>Текущий ход: {currentPlayer?.color}</h3>
      <div className="board">
        {board.cells.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((cell: CellModel) => (
              <Cell
                key={cell.id}
                cell={cell}
                selected={
                  cell.x === selectedCell?.x && cell.y === selectedCell?.y
                }
                onClick={handleClickCell}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Board;
