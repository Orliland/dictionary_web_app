import FontSelector from "../components/FontSelector";
import ThemeSelector from "../components/ThemeSelector";

import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <img
        src={Logo}
        alt="Dictionary web app logo"
        className="h-8 md:h-[36.5px]"
      />
      <div className="flex items-center gap-4">
        <FontSelector />
        <span className="block h-8 w-[1px] bg-white-300"></span>
        <ThemeSelector />
      </div>
    </nav>
  );
};

export default NavBar;
