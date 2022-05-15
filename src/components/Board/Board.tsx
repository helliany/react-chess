import React, { FC } from "react";
import { Board as BoardModel } from "../../app-models/Board";
import { Cell as CellModel } from "../../app-models/Cell";
import Cell from "../Cell/Cell";

interface BoardProps {
  board: BoardModel;
  setBoard: (board: BoardModel) => void;
}

const Board: FC<BoardProps> = ({ board, setBoard }) => {
  return (
  <div className="board">
    {board.cells.map((row, i) => (
      <React.Fragment key={i}>
        {row.map((cell: CellModel) => (
          <Cell key={cell.id} cell={cell} />
        ))}
      </React.Fragment>
    ))}
  </div>
  );
};

export default Board;
