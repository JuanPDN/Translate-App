interface Props {
  num?: number;
}

const Card: React.FC<Props> = ({ num = 0 }) => {
  let condicionalButton = null;
  let buttonTranslate = null;
  let toggleButton = null;
  if (num === 1) {
    condicionalButton = <li>Detect Lenguage</li>;
  } else {
    buttonTranslate = (
      <button>
        <img src="./src/assets/Sort_alfa.svg" alt="Sort_alfa" />
        Translate
      </button>
    );
    toggleButton = (
      <img src="./src/assets/Horizontal_top_left_main.svg" alt="toggle" />
    );
  }

  return (
    <div className={`${num === 1 ? "bg-212936cc/95" : "bg-121826cc/95"} w-full border-[1px] rounded-3xl border-4D5562`}>
      <ul>
        {condicionalButton}
        <li>English</li>
        <li>French</li>
        <li>Espanish</li>
      </ul>
      {toggleButton}
      <textarea name="translate" id="translate" maxLength={500}></textarea>
      <div>
        <div>
          <img src="./src/assets/sound_max_fill.svg" alt="sound" />
          <img src="./src/assets/Copy.svg" alt="" />
        </div>
        {buttonTranslate}
      </div>
    </div>
  );
};

export default Card;
