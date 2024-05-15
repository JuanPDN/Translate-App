import React, { useContext, useEffect, useState } from "react";

import { Props } from "../interfaces/interface.ts";
import Navbar from "./Navbar.tsx";
import { AppContext } from "../contexts/AppContext.tsx";
import { GlobalContext, LanguageContext } from "../types/types.ts";
import { LangContext } from "../contexts/LangContext.tsx";

const Card: React.FC<Props> = ({ firstCard = false }) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const { lang } = useContext(LangContext) as LanguageContext;
  const { globalState, setGlobalState } = useContext(
    AppContext
  ) as GlobalContext;

  const loadTranslate = async (translate: string) => {
    try {
      if (translate !== "") {
        const data = await fetch(
          `https://api.mymemory.translated.net/get?q=${translate}&langpair=${lang.lang1}|${lang.lang2}`
        ).then((data) => data.json());
        setGlobalState((prevGlobalState) => ({
          ...prevGlobalState,
          translated: data.responseData.translatedText,
        }));
      } else {
        setGlobalState((prevGlobalState) => ({
          ...prevGlobalState,
          translated: "",
        }));
      }
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

  const handleInputChange = (inputValue: string) => {
    setGlobalState((prevGlobalState) => ({
      ...prevGlobalState,
      translate: inputValue,
    }));

    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      loadTranslate(inputValue);
    }, 700);
    setTimer(newTimer);
  };

  useEffect(() => {
    if (firstCard) {
      loadTranslate(globalState.translate);
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
        rows={5}
        maxLength={500}
        value={firstCard ? globalState.translate : globalState.translated}
        onInput={(e) => {
          handleInputChange(e.currentTarget.value);
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
            onClick={() => loadTranslate(globalState.translate)}
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
