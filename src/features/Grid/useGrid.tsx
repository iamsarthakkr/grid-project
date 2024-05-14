import React from "react";
import { useAppContext } from "../App/useAppContext";

export const useGrid = () => {
   const context = useAppContext();
   const { source, destination } = context;

   const isSource = React.useCallback(
      (row: number, column: number) => {
         return source.row === row && source.column === column;
      },
      [source]
   );

   const isDest = React.useCallback(
      (row: number, column: number) => {
         return destination.row === row && destination.column === column;
      },
      [destination]
   );

   const getIcon = React.useCallback(
      (row: number, column: number) => {
         if (isSource(row, column)) {
            return <>S</>;
         }
         if (isDest(row, column)) {
            return <>D</>;
         }
         return <></>;
      },
      [isSource, isDest]
   );

   return {
      getIcon,
   };
};
