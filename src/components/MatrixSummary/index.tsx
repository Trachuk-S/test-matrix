import { useContext } from "react";
import MatrixContext from "../../context/matrix";
import { calculatePercentile } from "../../utils/matrix";

const MatrixSummary = () => {
  const { state } = useContext(MatrixContext);

  if (state.matrix.length === 0) return null;

  const colPercentiles = state.matrix[0].map((_, colIdx) => {
    const colValues = state.matrix.map((row) => row[colIdx].amount);
    return calculatePercentile(colValues);
  });

  return (
    <tfoot>
      <tr>
        {colPercentiles.map((percentile, idx) => (
          <td key={idx}>{percentile}</td>
        ))}
      </tr>
    </tfoot>
  );
};

export default MatrixSummary;
