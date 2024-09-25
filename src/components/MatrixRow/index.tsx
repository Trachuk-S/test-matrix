import React, { useContext } from "react";
import { calculateRowSum } from "../../utils/matrix";
import MatrixContext from "../../context/matrix";
import MatrixCell from "../MatrixCell";
import { ACTIONS_TYPE } from "../../types/matrix";

type Props = {
  rowIdx: number;
  row: { id: number; amount: number }[];
};

const MatrixRow: React.FC<Props> = ({ rowIdx, row }) => {
  const { dispatch } = useContext(MatrixContext);
  const rowSum = calculateRowSum(row);

  const handleRemoveRow = () => {
    dispatch({ type: ACTIONS_TYPE.REMOVE_ROW, rowIdx });
  };

  return (
    <tr>
      {row.map((cell, colIdx) => (
        <MatrixCell key={colIdx} rowIdx={rowIdx} colIdx={colIdx} cell={cell} />
      ))}
      <td>{rowSum}</td>
      <td>
        <button onClick={handleRemoveRow}>Remove</button>
      </td>
    </tr>
  );
};

export default MatrixRow;
