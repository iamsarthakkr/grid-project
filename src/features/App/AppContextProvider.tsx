import React from "react";
import { AppContext, AppContextActions } from "./context";
import { IAppContext, IAppContextActions, IGrid } from "../../types";

interface IProps {
   children: React.ReactElement;
}

export const AppContextProvider: React.FC<IProps> = (props) => {
   const [grid, setGrid] = React.useState<IGrid>([]);

   const initGrid: IAppContextActions["initGrid"] = React.useCallback(
      (grid) => {
         setGrid(grid);
      },
      []
   );

   const getRows: IAppContext["getRows"] = React.useCallback(() => {
      return grid.length;
   }, [grid]);

   const getColumns: IAppContext["getRows"] = React.useCallback(() => {
      if (grid.length === 0) {
         return 0;
      }
      return grid[0].length;
   }, [grid]);

   const context: IAppContext = {
      grid,
      getRows,
      getColumns,
   };

   return (
      <AppContext.Provider value={context}>
         <AppContextActions.Provider
            value={{
               initGrid,
            }}
         >
            {props.children}
         </AppContextActions.Provider>
      </AppContext.Provider>
   );
};
