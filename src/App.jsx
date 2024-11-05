import { useState } from "react";
import Header from "./layout/Header";

import { ThemeContext } from "./utils/ThemeContext";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <div className="m-6 mb-[85px] md:mx-10 md:mb-[118px] md:mt-[58px] lg:mx-auto lg:mb-[124px] lg:w-[51.11111%]">
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
