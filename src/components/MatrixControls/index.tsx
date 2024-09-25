import { useState, useContext } from "react";
import MatrixContext from "../../context/matrix";
import { ACTIONS_TYPE } from "../../types/matrix";

const MatrixControls = () => {
  const { dispatch } = useContext(MatrixContext);
  const [M, setM] = useState(0);
  const [N, setN] = useState(0);
  const [X, setX] = useState(0);

  const handleGenerate = () => {
    dispatch({ type: ACTIONS_TYPE.SET_MATRIX, M, N, X });
  };

  return (
    <div>
      <input
        type="number"
        value={M}
        onChange={(e) => setM(Number(e.target.value))}
        placeholder="Rows (M)"
        min={0}
        max={100}
      />
      <input
        type="number"
        value={N}
        onChange={(e) => setN(Number(e.target.value))}
        placeholder="Cols (N)"
        min={0}
        max={100}
      />
      <input
        type="number"
        value={X}
        onChange={(e) => setX(Number(e.target.value))}
        placeholder="Nearest Cells (X)"
        min={M}
        max={N}
      />
      <button onClick={handleGenerate}>Generate Matrix</button>
    </div>
  );
};

export default MatrixControls;
