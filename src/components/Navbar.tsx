import { useEffect, useState } from "react";

import { Props } from "../interfaces/interface";
import languages from "./languages";

const Navbar: React.FC<Props> = ({ firstCard }) => {
  const [selected, setSelected] = useState("");

  let firstlanguage = [];

  if (firstCard) {
    firstlanguage = languages.slice(0, 3);
  } else {
    firstlanguage = languages.slice(1, 3);
  }

  useEffect(() => {
    setSelected(firstCard ? "en-EN" : "fr-FR");
  }, []);

  return (
    <div className="w-full justify-between flex flex-row items-center relative">
      <ul className="flex text-sm font-bold text-6C727F gap-3 flex-wrap">
        {firstlanguage.map((language, index) => (
          <li
            key={index}
            className={`${
              selected === language.value && "bg-4D5562 text-F9FAFB"
            } px-3 py-2 cursor-pointer rounded-xl flex gap-1`}
            onClick={() => {
              setSelected(language.value);
            }}
          >
            {language.name}
          </li>
        ))}
        <li className="relative flex items-center">
          <select
            name="langs"
            onClick={() => {
              setSelected("langs");
            }}
            className={`${
              selected === "langs" ? "bg-4D5562 text-F9FAFB" : "bg-transparent"
            } max-w-[5.5rem] appearance-none outline-none py-2 pl-3 pr-5 rounded-xl`}
          >
            {languages.slice(3).map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </select>
          <img
            className="absolute right-1 pointer-events-none"
            src="./src/assets/Expand_down.svg"
            alt="Expand_down"
          />
        </li>
      </ul>
      {!firstCard && (
        <img
          className="p-[6px] border-4D5562 border-2 rounded-xl active:bg-394150"
          src="./src/assets/Horizontal_top_left_main.svg"
          alt="toggle"
        />
      )}
    </div>
  );
};

export default Navbar;
