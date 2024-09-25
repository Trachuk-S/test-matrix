import React, { useContext } from "react";
import MatrixContext from "../../context/matrix";
import { ACTIONS_TYPE } from "../../types/matrix";

type Props = {
  rowIdx: number;
  colIdx: number;
  cell: { id: number; amount: number };
};

const MatrixCell: React.FC<Props> = ({ rowIdx, colIdx, cell }) => {
  const { dispatch } = useContext(MatrixContext);

  const handleClick = () => {
    dispatch({ type: ACTIONS_TYPE.INCREMENT_CELL, rowIdx, colIdx });
  };

  return <td onClick={handleClick}>{cell.amount}</td>;
};

export default MatrixCell;
