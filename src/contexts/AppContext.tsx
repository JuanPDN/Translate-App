import { createContext, useState } from "react";
import { Children, Translate } from "../interfaces/interface";

export const AppContext = createContext({});

export const AppProvider = ({ children }:Children) => {
  const [globalState, setGlobalState] = useState<Translate>({translate:"Hello, how are you?", translated:""});
  return (
    <AppContext.Provider value={{globalState, setGlobalState}}>
        {children}
    </AppContext.Provider>
  );
};
