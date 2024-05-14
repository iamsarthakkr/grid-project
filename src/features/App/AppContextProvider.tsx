import React from "react";
import { AppContext, AppContextActions } from "./context";
import {
   IAppContext,
   IAppContextActions,
   ICoordinates,
   IGrid,
} from "../../types";

interface IProps {
   children: React.ReactElement;
}

export const AppContextProvider: React.FC<IProps> = (props) => {
   const [grid, setGrid] = React.useState<IGrid>([]);
   const [source, setSource] = React.useState<ICoordinates>({
      row: 0,
      column: 0,
   });
   const [destination, setDestination] = React.useState<ICoordinates>({
      row: 0,
      column: 0,
   });

   const getRows: IAppContext["getRows"] = React.useCallback(() => {
      return grid.length;
   }, [grid]);

   const getColumns: IAppContext["getRows"] = React.useCallback(() => {
      return grid.length === 0 ? 0 : grid[0].length;
   }, [grid]);

   const initGrid: IAppContextActions["initGrid"] = React.useCallback(
      (grid) => {
         setGrid(grid);

         // init source and dest
         const rows = grid.length;
         const columns = grid.length ? grid[0].length : 0;
         const source: ICoordinates = {
            row: Math.floor(rows / 2),
            column: 0,
         };
         const dest: ICoordinates = {
            row: Math.floor(rows / 2),
            column: columns - 1,
         };

         setSource(source);
         setDestination(dest);
      },
      []
   );

   const updateSource: IAppContextActions["updateSource"] = React.useCallback(
      (row, column) => {
         setSource({ row, column });
      },
      []
   );
   const updateDestination: IAppContextActions["updateDestination"] =
      React.useCallback((row, column) => {
         setDestination({ row, column });
      }, []);

   const context: IAppContext = React.useMemo(() => {
      return {
         grid,
         getRows,
         getColumns,
         source,
         destination,
      };
   }, [grid, getRows, getColumns, source, destination]);

   const contextActions: IAppContextActions = React.useMemo(() => {
      return {
         initGrid,
         updateSource,
         updateDestination,
      };
   }, [initGrid, updateSource, updateDestination]);

   React.useEffect(() => {
      console.log({ context });
   }, [context]);

   return (
      <AppContext.Provider value={context}>
         <AppContextActions.Provider value={contextActions}>
            {props.children}
         </AppContextActions.Provider>
      </AppContext.Provider>
   );
};
