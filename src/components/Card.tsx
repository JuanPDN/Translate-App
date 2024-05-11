import { useContext, useState } from "react";

import { Props } from "../interfaces/interface.ts";
import Navbar from "./Navbar.tsx";
import { AppContext } from "../contexts/AppContext.tsx";
import { GlobalContext } from "../types/types.ts";

const Card: React.FC<Props> = ({ firstCard = false }) => {
  const [copied, setCopied] = useState(false);
  const { globalState, setGlobalState } = useContext(
    AppContext
  ) as GlobalContext;

  const copy = () => {
    navigator.clipboard
      .writeText(globalState)
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

  const readText = () => {
    const utterance = new SpeechSynthesisUtterance(globalState);
    utterance.rate = 1.1;
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`${
        firstCard ? "bg-212936cc/95" : "bg-121826cc/95"
      } w-full border-[1px] p-6 rounded-3xl border-4D5562 flex flex-col`}
    >
      <Navbar firstCard={firstCard} />
      <textarea
        className={`bg-transparent mt-4 py-6 text-F9FAFB text-base font-bold ${
          firstCard ? "caret-F9FAFB" : "caret-transparent"
        } border-4D5562 border-t outline-none resize-none h-full`}
        name="translate"
        id={firstCard ? "translate" : "translated"}
        rows={5}
        maxLength={500}
        value={globalState}
        onChange={(e) => {
          if (firstCard) {
            setGlobalState(e.target.value);
          }
        }}
      ></textarea>
      {firstCard && (
        <p className="text-end text-xs text-6C727F">{globalState.length}/500</p>
      )}
      <div className="flex flex-row justify-between items-center pt-3">
        <div className="flex gap-2">
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="./src/assets/sound_max_fill.svg"
            alt="sound"
            onClick={readText}
          />
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="./src/assets/Copy.svg"
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
          >
            <img src="./src/assets/Sort_alfa.svg" alt="Sort_alfa" />
            Translate
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
