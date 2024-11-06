import { useState } from "react";
import Header from "./layout/Header";

import { ThemeContext } from "./utils/ThemeContext";
import { FontContext } from "./utils/FontContext";

function App() {
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  const [keyword, setKeyword] = useState("");

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <FontContext.Provider value={[font, setFont]}>
        <div className="m-6 mb-[85px] md:mx-10 md:mb-[118px] md:mt-[58px] lg:mx-auto lg:mb-[124px] lg:w-[51.11111%]">
          <Header keyword={keyword} setKeyword={setKeyword} />
        </div>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
