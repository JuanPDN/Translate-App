import { useEffect, useState } from "react";
import { Props } from "../interfaces/interface";
import languages from "./languages";

const Navbar: React.FC<Props> = ({ firstCard }) => {
  const [selected, setSelected] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedlanguage, setSelectedlanguage] = useState({
    value: "es-ES",
    name: "Spanish",
  });
  let firstlanguage = [];

  if (firstCard) {
    firstlanguage = languages.slice(0, 4);
  } else {
    firstlanguage = languages.slice(1, 4);
  }

  useEffect(() => {
    setSelected(firstCard ? "en-EN" : "fr-FR");
  }, [firstCard]);

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
              setSelected(language.value)
              if (index === firstlanguage.length - 1) {
                setIsDropdownOpen(!isDropdownOpen);
              }
            }}
          >
            {index === firstlanguage.length - 1
              ? selectedlanguage.name
              : language.name}
            {index === firstlanguage.length - 1 && (
              <img src="./src/assets/Expand_down.svg" alt="Expand_down" />
            )}
          </li>
        ))}
        {isDropdownOpen && (
          <ul
            className={`absolute top-full ${
              firstCard ? "left-80" : "left-[10.5rem]"
            } py-2  text-F9FAFB max-h-64 rounded-b-xl overflow-y-auto bg-4D5562/40 backdrop-blur-lg `}
          >
            {languages.slice(4).map((language, index) => (
              <li
                className="px-3 hover:bg-6C727F cursor-pointer"
                value={language.value}
                key={index}
                onClick={() => {
                  setSelectedlanguage({
                    value: language.value,
                    name: language.name,
                  });
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                {language.name}
              </li>
            ))}
          </ul>
        )}
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
