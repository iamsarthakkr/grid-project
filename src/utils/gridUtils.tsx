import { IGrid, IGridCell } from "../types";

export const generateGrid = (rows: number, columns: number): IGrid => {
   return Array.from(Array(rows), () => Array(columns).fill(0)).map(
      (row, i) => {
         return row.map((_col, j) => {
            const cell: IGridCell = {
               position: {
                  row: i,
                  column: j,
               },
            };
            return cell;
         });
      }
   );
};
