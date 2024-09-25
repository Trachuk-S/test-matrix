import { useContext } from "react";
import MatrixContext from "../../context/matrix";
import MatrixRow from "../MatrixRow";
import MatrixSummary from "../MatrixSummary";
import { ACTIONS_TYPE } from "../../types/matrix";

const Matrix = () => {
  const { state, dispatch } = useContext(MatrixContext);

  const handleAddRow = () => {
    dispatch({ type: ACTIONS_TYPE.ADD_ROW });
  };

  return (
    <div className="matrix-container">
      <table>
        <tbody>
          {state.matrix.map((row, rowIdx) => (
            <MatrixRow key={rowIdx} rowIdx={rowIdx} row={row} />
          ))}
        </tbody>
      </table>
      <MatrixSummary />
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default Matrix;
