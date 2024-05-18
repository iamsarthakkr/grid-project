import { ICoordinates, IGrid } from "./IGrid";
import { Action1, Action2, Provider } from "./types";

export interface IAppContext {
   grid: IGrid;
   getRows: Provider<number>;
   getColumns: Provider<number>;
   source: ICoordinates;
   destination: ICoordinates;
}

export interface IAppContextActions {
   initGrid: Action1<IGrid>;
   updateSource: Action2<number, number>;
   updateDestination: Action2<number, number>;
}
