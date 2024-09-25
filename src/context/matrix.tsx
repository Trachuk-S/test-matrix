import React, { createContext, useReducer, ReactNode } from "react";
import { generateMatrix } from "../utils/matrix";
import { ACTIONS_TYPE } from "../types/matrix";

type Cell = {
  id: number;
  amount: number;
};

type MatrixState = {
  matrix: Cell[][];
  M: number;
  N: number;
  X: number;
};

type MatrixAction =
  | { type: ACTIONS_TYPE.SET_MATRIX; M: number; N: number; X: number }
  | { type: ACTIONS_TYPE.INCREMENT_CELL; rowIdx: number; colIdx: number }
  | { type: ACTIONS_TYPE.ADD_ROW }
  | { type: ACTIONS_TYPE.REMOVE_ROW; rowIdx: number };

const initialState: MatrixState = {
  matrix: [],
  M: 0,
  N: 0,
  X: 0,
};

const MatrixContext = createContext<{
  state: MatrixState;
  dispatch: React.Dispatch<MatrixAction>;
}>({ state: initialState, dispatch: () => null });

const matrixReducer = (
  state: MatrixState,
  action: MatrixAction
): MatrixState => {
  switch (action.type) {
    case ACTIONS_TYPE.SET_MATRIX:
      return {
        ...state,
        M: action.M,
        N: action.N,
        X: action.X,
        matrix: generateMatrix(action.M, action.N),
      };

    case ACTIONS_TYPE.INCREMENT_CELL: {
      const newMatrix = state.matrix.map((row, rowIdx) =>
        row.map((cell, colIdx) =>
          rowIdx === action.rowIdx && colIdx === action.colIdx
            ? { ...cell, amount: cell.amount + 1 }
            : cell
        )
      );
      return { ...state, matrix: newMatrix };
    }

    case ACTIONS_TYPE.ADD_ROW: {
      const newRow = generateMatrix(1, state.N)[0];
      return { ...state, matrix: [...state.matrix, newRow] };
    }

    case ACTIONS_TYPE.REMOVE_ROW:
      return {
        ...state,
        matrix: state.matrix.filter((_, rowIdx) => rowIdx !== action.rowIdx),
      };

    default:
      return state;
  }
};

export const MatrixProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(matrixReducer, initialState);

  return (
    <MatrixContext.Provider value={{ state, dispatch }}>
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixContext;
