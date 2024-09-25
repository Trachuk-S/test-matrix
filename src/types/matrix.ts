type CellId = number;
type CellValue = number;

export type Cell = {
  id: CellId;
  amount: CellValue;
};

export type MatrixRow = Cell[];
export type Matrix = MatrixRow[];

export enum ACTIONS_TYPE {
  SET_MATRIX = "SET_MATRIX",
  INCREMENT_CELL = "INCREMENT_CELL",
  ADD_ROW = "ADD_ROW",
  REMOVE_ROW = "REMOVE_ROW",
}
