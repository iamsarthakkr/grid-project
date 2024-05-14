import React from "react";
import styled from "styled-components";
import { FlexCol, FlexContainer } from "../../components";
import { CELL_SIZE } from "../../constants";
import { useAppContext, useAppContextActions } from "../App/useAppContext";
import { generateGrid } from "../../utils/gridUtils";
import { GridRow } from "../../components/GridComponents";
import { Cell } from "./Cell";

const Container = styled(FlexContainer)`
   justify-content: center;
   align-items: center;
   flex: 1;
`;

const GridContainer = styled(FlexCol)`
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 90%;
`;

export const Grid = () => {
   const ref = React.useRef<HTMLDivElement | null>(null);
   const context = useAppContext();
   const actions = useAppContextActions();

   const { grid } = context;

   React.useLayoutEffect(() => {
      if (ref.current) {
         const h = ref.current.offsetHeight,
            w = ref.current.offsetWidth;
         const columns = Math.floor(w / CELL_SIZE);
         const rows = Math.floor(h / CELL_SIZE);
         actions.initGrid(generateGrid(rows, columns));
      }
   }, [actions]);

   const Grid = React.useMemo(() => {
      return grid.map((row, i) => {
         return (
            <GridRow height={CELL_SIZE} key={i}>
               {row.map((cell, j) => {
                  return (
                     <Cell
                        row={cell.position.row}
                        column={cell.position.column}
                        key={i * row.length + j}
                     />
                  );
               })}
            </GridRow>
         );
      });
   }, [grid]);

   return (
      <Container>
         <GridContainer ref={ref}>{Grid}</GridContainer>
      </Container>
   );
};
