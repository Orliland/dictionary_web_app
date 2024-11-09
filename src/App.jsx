import { useState } from "react";
import Header from "./layout/Header";

import { ThemeContext } from "./utils/ThemeContext";
import { FontContext } from "./utils/FontContext";
import { useEffect } from "react";
import Main from "./layout/Main";

function App() {
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  async function getDefinition() {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`,
      );
      if (response.ok) {
        const json = await response.json();
        setDefinition(json);
      } else {
        throw new Error(response.status);
      }
    } catch {
      setDefinition(false);
    }
  }

  useEffect(() => {
    if (keyword != "") {
      getDefinition();
    }
  }, [keyword]);

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <FontContext.Provider value={[font, setFont]}>
        <div
          className={`${font == "Sans Serif" && "font-sans"} ${font == "Serif" && "font-serif"} ${font == "Mono" && "font-mono"} m-6 mb-[85px] flex flex-col gap-6 md:mx-10 md:mb-[118px] md:mt-[58px] md:gap-[50px] lg:mx-auto lg:mb-[124px] lg:w-[51.11111%] lg:gap-[45px]`}
        >
          <Header setKeyword={setKeyword} setDefinition={setDefinition} />
          <Main definition={definition} />
        </div>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
