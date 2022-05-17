import { FC } from "react";
import { Cell as CellModel } from "../../models/Cell";

interface CellProps {
  cell: CellModel;
  selected: boolean;
  onClick: (cell: CellModel) => void;
}

const Cell: FC<CellProps> = ({ cell, selected, onClick }) => {
  return (
    <div
      className={`cell ${cell.color}${selected ? " selected" : ""}${
        cell.figure && cell.available ? " enemy" : ""
      }`}
      onClick={() => onClick(cell)}
    >
      {!cell.figure && cell.available && <div className="available"></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
};

export default Cell;
