import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ setKeyword, setDefinitions }) => {
  return (
    <header className="flex flex-col gap-6 md:gap-[50px]">
      <NavBar />
      <SearchBar setKeyword={setKeyword} setDefinitions={setDefinitions} />
    </header>
  );
};

export default Header;
