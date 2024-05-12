import { IGrid } from "./IGrid";
import { Action1, Provider } from "./types";

export interface IAppContext {
   grid: IGrid;
   getRows: Provider<number>;
   getColumns: Provider<number>;
}

export interface IAppContextActions {
   initGrid: Action1<IGrid>;
}
