interface Props {
  num?: number;
}

const Card: React.FC<Props> = ({ num = 0 }) => {
  let condicionalButton = null;
  let buttonTranslate = null;
  let toggleButton = null;
  let counter = null;

  if (num === 1) {
    condicionalButton = <li className="p-3">Detect Lenguage</li>;
    counter = (
      <p className="text-end text-xs font-bold text-4D5562">0/500</p>
    );
    buttonTranslate = (
      <button className="flex gap-3 py-3 px-6 border-[1px] rounded-xl text-base text-F9FAFB bg-3662E3 border-7CA9F3">
        <img src="./src/assets/Sort_alfa.svg" alt="Sort_alfa" />
        Translate
      </button>
    );
  } else {
    toggleButton = (
      <img
        className="p-[6px] border-4D5562 border-2 rounded-xl"
        src="./src/assets/Horizontal_top_left_main.svg"
        alt="toggle"
      />
    );
  }

  return (
    <div
      key={num}
      className={`${
        num === 1 ? "bg-212936cc/95" : "bg-121826cc/95"
      } w-full border-[1px] p-6 rounded-3xl border-4D5562 flex flex-col`}
    >
      <div className="w-full justify-between flex flex-row items-center">
        <ul className="flex text-sm font-bold text-4D5562 gap-3 flex-wrap">
          {condicionalButton}
          <li className="p-3">English</li>
          <li className="p-3">French</li>
          <li className="p-3">Spanish</li>
        </ul>
        {toggleButton}
      </div>
      <textarea
        className="bg-transparent mt-4 py-6 text-F9FAFB text-base font-bold caret-F9FAFB border-4D5562 border-t outline-none resize-none h-full"
        name="translate"
        id={num === 1 ? "translate" : "translated"}
        rows={5}
        maxLength={500}
      >
        Hello, how are you?
      </textarea>
      {counter}
      <div className="flex flex-row justify-between items-center pt-3">
        <div className="flex gap-2">
          <img
            className="p-2 border-2 border-4D5562 rounded-xl"
            src="./src/assets/sound_max_fill.svg"
            alt="sound"
          />
          <img
            className="p-2 border-2 border-4D5562 rounded-xl"
            src="./src/assets/Copy.svg"
            alt=""
          />
        </div>
        {buttonTranslate}
      </div>
    </div>
  );
};

export default Card;
