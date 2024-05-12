import React from "react";
import styled from "styled-components";
import { CELL_SIZE } from "../../constants";
import { useAppContext } from "../App/useAppContext";

const CellCont = styled.div<{ lastRow: boolean; lastColumn: boolean }>`
   width: ${() => `${CELL_SIZE}px`};
   height: ${() => `${CELL_SIZE}px`};
   border: none;
   border-top: 1px solid black;
   border-left: 1px solid black;
   border-right: ${(props) => (props.lastColumn ? `1px solid black` : "none")};
   border-bottom: ${(props) => (props.lastRow ? `1px solid black` : "none")};
`;

interface ICell {
   row: number;
   column: number;
}

export const Cell: React.FC<ICell> = (props) => {
   const context = useAppContext();
   const columns = context.getColumns(),
      rows = context.getRows();
   const lastCol = props.column === columns - 1,
      lastRow = props.row === rows - 1;

   return <CellCont lastColumn={lastCol} lastRow={lastRow} />;
};
