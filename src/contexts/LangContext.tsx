import { createContext, useState } from "react";
import { Children, Lang } from "../interfaces/interface";

export const LangContext = createContext({});

export const LangProvider = ({ children }: Children) => {
  const [lang, setLang] = useState<Lang>({ lang1: "en-EN", lang2: "fr-FR" });

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
