import { Cell } from "../types/matrix";

export const generateMatrix = (M: number, N: number): Cell[][] => {
  let cellId = 0;
  return Array.from({ length: M }, () =>
    Array.from({ length: N }, () => ({
      id: ++cellId,
      amount: Math.floor(100 + Math.random() * 900),
    }))
  );
};

export const calculateRowSum = (row: Cell[]) =>
  row.reduce((sum, cell) => sum + cell.amount, 0);

export const calculatePercentile = (values: number[]) => {
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 !== 0
    ? values[middle]
    : (values[middle - 1] + values[middle]) / 2;
};
