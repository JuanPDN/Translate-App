import { useContext, useEffect, useState } from "react";

import { Props } from "../interfaces/interface.ts";
import Navbar from "./Navbar.tsx";
import { AppContext } from "../contexts/AppContext.tsx";
import { GlobalContext, LanguageContext } from "../types/types.ts";
import { LangContext } from "../contexts/LangContext.tsx";

const Card: React.FC<Props> = ({ firstCard = false }) => {
  const [copied, setCopied] = useState(false);
  const { lang } = useContext(LangContext) as LanguageContext;
  const { globalState, setGlobalState } = useContext(
    AppContext
  ) as GlobalContext;

  const loadTranslate = async () => {
    try {
      if (globalState.translate !== "") {
        const data = await fetch(
          `https://api.mymemory.translated.net/get?q=${globalState.translate}&langpair=${lang.lang1}|${lang.lang2}`
        ).then((data) => data.json());
        setGlobalState({
          ...globalState,
          translated: data.responseData.translatedText,
        });
      }
      return;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const copy = () => {
    navigator.clipboard
      .writeText(firstCard ? globalState.translate : globalState.translated)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1300);
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const readText = (lang: string) => {
    const utterance = new SpeechSynthesisUtterance(
      firstCard ? globalState.translate : globalState.translated
    );
    utterance.rate = 1;
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (firstCard) {
      loadTranslate();
    }
    return;
  }, [lang]);

  return (
    <div
      className={`${
        firstCard ? "bg-212936cc/80" : "bg-121826cc/80"
      } w-full border-[1px] p-6 rounded-3xl border-4D5562 flex flex-col`}
    >
      <Navbar firstCard={firstCard} />
      <textarea
        className="bg-transparent mt-4 py-6 text-F9FAFB text-base font-bold caret-F9FAFB border-4D5562 border-t outline-none resize-none h-full"
        readOnly={!firstCard}
        name="translate"
        id={firstCard ? "translate" : "translated"}
        rows={6}
        maxLength={500}
        value={firstCard ? globalState.translate : globalState.translated}
        onChange={(e) => {
          if (firstCard) {
            setGlobalState({ ...globalState, translate: e.target.value });
          }
        }}
      ></textarea>
      {firstCard && (
        <p className="text-end text-xs text-6C727F">
          {globalState.translate.length}/500
        </p>
      )}
      <div className="flex flex-row justify-between items-center pt-3">
        <div className="flex gap-2">
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="/sound_max_fill.svg"
            alt="sound"
            onClick={() => readText(firstCard ? lang.lang1 : lang.lang2)}
          />
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="/Copy.svg"
            alt="Copy"
            onClick={copy}
          />
          {copied && (
            <span className="relative top-2 text-CDD5E0">Copied!</span>
          )}
        </div>
        {firstCard && (
          <button
            className="flex gap-3 py-3 px-6 border-[1px] rounded-xl text-base
            text-F9FAFB bg-3662E3 border-7CA9F3 active:bg-7CA9F3 transition-colors ease-in-out"
            onClick={loadTranslate}
          >
            <img src="/Sort_alfa.svg" alt="Sort_alfa" />
            Translate
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
