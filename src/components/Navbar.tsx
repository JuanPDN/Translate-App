import { useContext } from "react";

import { AppContext } from "../contexts/AppContext";
import { LangContext } from "../contexts/LangContext";
import { Props } from "../interfaces/interface";
import { GlobalContext, LanguageContext } from "../types/types";
import languages from "./languages";

const Navbar: React.FC<Props> = ({ firstCard }) => {
  const { lang, setLang } = useContext(LangContext) as LanguageContext;
  const { globalState, setGlobalState } = useContext(
    AppContext
  ) as GlobalContext;

  let firstlanguage = [];

  if (firstCard) {
    firstlanguage = languages.slice(0, 3);
  } else {
    firstlanguage = languages.slice(1, 3);
  }

  const toggleLang = () => {
    setGlobalState({
      translate: globalState.translated,
      translated: globalState.translate,
    });
    setLang({ lang1: lang.lang2, lang2: lang.lang1 });
  };

  return (
    <div className="w-full justify-between flex flex-row items-center relative">
      <ul className="flex text-sm font-bold text-6C727F gap-3 flex-wrap">
        {firstlanguage.map((language, index) => (
          <li
            key={index}
            className={`${
              (firstCard ? lang.lang1 : lang.lang2) === language.value &&
              "bg-4D5562 text-F9FAFB"
            } px-3 py-2 cursor-pointer rounded-xl flex gap-1`}
            onClick={() => {
              setLang(
                firstCard
                  ? { ...lang, lang1: language.value }
                  : { ...lang, lang2: language.value }
              );
            }}
          >
            {language.name}
          </li>
        ))}
        <li className="relative flex items-center">
          <select
            value={firstCard ? lang.lang1 : lang.lang2}
            name="langs"
            onChange={(e) => {
              setLang(
                firstCard
                  ? { ...lang, lang1: e.target.value }
                  : { ...lang, lang2: e.target.value }
              );
            }}
            onFocus={(e) => {
              setLang(
                firstCard
                  ? { ...lang, lang1: e.target.value }
                  : { ...lang, lang2: e.target.value }
              );
            }}
            className={`${
              (firstCard ? lang.lang1 : lang.lang2) !== "en-EN" &&
              (firstCard ? lang.lang1 : lang.lang2) !== "fr-FR" &&
              (firstCard ? lang.lang1 : lang.lang2) !== "Autodetect"
                ? "bg-4D5562 text-F9FAFB"
                : "bg-transparent"
            } max-w-[5.5rem] appearance-none outline-none py-2 pl-3 pr-5 rounded-xl`}
          >
            {languages.slice(3).map((language, index) => (
              <option key={index} value={language.value}>
                {language.name}
              </option>
            ))}
          </select>
          <img
            className="absolute right-1 pointer-events-none"
            src="/Expand_down.svg"
            alt="Expand_down"
          />
        </li>
      </ul>
      {!firstCard && (
        <img
          className="p-[6px] border-4D5562 border-2 rounded-xl active:bg-394150"
          src="/Horizontal_top_left_main.svg"
          alt="toggle"
          onClick={toggleLang}
        />
      )}
    </div>
  );
};

export default Navbar;
