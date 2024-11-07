import { useState } from "react";
import Header from "./layout/Header";

import { ThemeContext } from "./utils/ThemeContext";
import { FontContext } from "./utils/FontContext";
import Landing from "./layout/Landing";

function App() {
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  const [keyword, setKeyword] = useState("");

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <FontContext.Provider value={[font, setFont]}>
        <div
          className={`${font == "Sans Serif" && "font-sans"} ${font == "Serif" && "font-serif"} ${font == "Mono" && "font-mono"} m-6 mb-[85px] md:mx-10 md:mb-[118px] md:mt-[58px] lg:mx-auto lg:mb-[124px] lg:w-[51.11111%]`}
        >
          <Header keyword={keyword} setKeyword={setKeyword} />
          <main>
            <Landing
              icon="⌨️"
              title="Start typing the keyword"
              description="Write the word you want to know the meaning of and press ENTER. We take care of the rest."
            />
          </main>
        </div>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
