import { FC } from "react";
import { Cell as CellModel } from "../../app-models/Cell";

interface CellProps {
  cell: CellModel
}

const Cell: FC<CellProps> = ({cell}) => {
  return (
    <div className={`cell ${cell.color}`}>
      
    </div>
  );
};

export default Cell;
