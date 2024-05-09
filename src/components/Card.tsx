import { useState } from "react";

import { Props } from "../interfaces/interface.ts";
import Navbar from "./Navbar.tsx";

const Card: React.FC<Props> = ({ firstCard = false }) => {
  const [text, setText] = useState("Hello, how are you?");

  return (
    <div
      className={`${
        firstCard ? "bg-212936cc/95" : "bg-121826cc/95"
      } w-full border-[1px] p-6 rounded-3xl border-4D5562 flex flex-col`}
    >
      <Navbar firstCard={firstCard} />
      <textarea
        className="bg-transparent mt-4 py-6 text-F9FAFB text-base font-bold caret-F9FAFB border-4D5562 border-t outline-none resize-none h-full"
        name="translate"
        id={firstCard ? "translate" : "translated"}
        rows={5}
        maxLength={500}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      {firstCard && (
        <p className="text-end text-xs text-6C727F">{text.length}/500</p>
      )}
      <div className="flex flex-row justify-between items-center pt-3">
        <div className="flex gap-2">
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="./src/assets/sound_max_fill.svg"
            alt="sound"
          />
          <img
            className="p-2 border-2 border-4D5562 rounded-xl active:bg-394150"
            src="./src/assets/Copy.svg"
            alt="Copy"
          />
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
