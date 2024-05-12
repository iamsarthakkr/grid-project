import React from "react";
import { IAppContext, IAppContextActions } from "../../types";

export const AppContext = React.createContext<IAppContext>(
   null as unknown as IAppContext
);

export const AppContextActions = React.createContext<IAppContextActions>(
   null as unknown as IAppContextActions
);
