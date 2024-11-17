import { useState } from "react";
import Header from "./layout/Header";

import { ThemeContext } from "./utils/ThemeContext";
import { FontContext } from "./utils/FontContext";
import { useEffect } from "react";
import Main from "./layout/Main";

import { useFetch } from "./utils/useFetch";

function App() {
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  useEffect(() => {
    let localDark = localStorage.getItem("dark");
    if (localDark === null) {
      localDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      localDark = JSON.parse(localDark);
    }

    if (localDark != dark) {
      setDark(localDark);
    }
    document.documentElement.classList.toggle("dark");
  }, [dark]);

  useEffect(() => {
    let localFont = localStorage.getItem("font");
    if (localFont != null) {
      setFont(localFont);
    }
  }, [font]);

  const [keyword, setKeyword] = useState("");
  const { data, isLoading, error } = useFetch(keyword);

  return (
    <div className="min-h-screen w-screen max-w-full bg-white-100 dark:bg-black-400">
      <ThemeContext.Provider value={[dark, setDark]}>
        <FontContext.Provider value={[font, setFont]}>
          <div
            className={`${font == "Sans Serif" && "font-sans"} ${font == "Serif" && "font-serif"} ${font == "Mono" && "font-mono"} flex flex-col gap-6 p-6 pb-[85px] md:mx-10 md:gap-[50px] md:pb-[118px] md:pt-[58px] lg:mx-auto lg:w-[51.11111%] lg:gap-[45px] lg:pb-[124px]`}
          >
            <Header setKeyword={setKeyword} />
            <Main definitions={data} isLoading={isLoading} error={error} />
          </div>
        </FontContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
