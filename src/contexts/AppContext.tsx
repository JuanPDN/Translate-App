import { createContext, useState } from "react";
import { Children } from "../interfaces/interface";

export const AppContext = createContext({});

export const AppProvider = ({ children }:Children) => {
  const [globalState, setGlobalState] = useState<string>("Hello, how are you?");
  return (
    <AppContext.Provider value={{globalState, setGlobalState}}>
        {children}
    </AppContext.Provider>
  );
};
