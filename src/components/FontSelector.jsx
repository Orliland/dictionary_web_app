import { useState } from "react";
import ArrowDownIcon from "../assets/icon-arrow-down.svg";
import { useContext } from "react";
import { FontContext } from "../utils/FontContext";

const FontSelector = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [font, setFont] = useContext(FontContext);

  return (
    <div className="body-b md:body-m relative md:font-bold">
      <div
        className="flex items-center gap-4 hover:cursor-pointer hover:text-purple"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span
          className={` ${font == "Sans Serif" && "font-sans"} ${font == "Serif" && "font-serif"} ${font == "Mono" && "font-mono"} `}
        >
          {font}
        </span>
        <img
          className="h-[6px] w-3"
          src={ArrowDownIcon}
          alt="show dropdown for font selector"
        />
      </div>

      {/* TODO: convert into a component */}
      <ul
        className={`${!showMenu && "hidden"} absolute right-0 top-full mt-[18px] flex w-[183px] flex-col gap-4 rounded-2xl p-6 shadow-[0_5px_30px_rgba(0,0,0,0.1)]`}
      >
        <li
          className="font-sans hover:cursor-pointer hover:text-purple"
          onClick={() => {
            setFont("Sans Serif");
            setShowMenu(!showMenu);
          }}
        >
          Sans Serif
        </li>
        <li
          className="font-serif hover:cursor-pointer hover:text-purple"
          onClick={() => {
            setFont("Serif");
            setShowMenu(!showMenu);
          }}
        >
          Serif
        </li>
        <li
          className="font-mono hover:cursor-pointer hover:text-purple"
          onClick={() => {
            setFont("Mono");
            setShowMenu(!showMenu);
          }}
        >
          Mono
        </li>
      </ul>
    </div>
  );
};

export default FontSelector;
