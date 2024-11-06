import { useContext } from "react";
import IconMoon from "../assets/icon-moon.svg";
import { ThemeContext } from "../utils/ThemeContext";

const ThemeSelector = () => {
  const [dark, setDark] = useContext(ThemeContext);

  return (
    <div className="flex gap-3 md:gap-5">
      <button
        className="h-5 w-10 rounded-full bg-white-400 p-[3px] hover:bg-purple"
        onClick={() => {
          setDark(!dark);
        }}
      >
        <span
          className={`block h-[14px] w-[14px] rounded-full bg-white-100 ${dark && "ml-auto"}`}
        ></span>
      </button>
      <img
        src={IconMoon}
        alt="icon for switch theme color"
        className="h-5 w-auto"
      />
    </div>
  );
};

export default ThemeSelector;
