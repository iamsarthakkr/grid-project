export type ICoordinates = {
   row: number;
   column: number;
};

export type IGridCell = {
   position: ICoordinates;
};

export type IGrid = Array<Array<IGridCell>>;
