import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ setKeyword, setDefinition }) => {
  return (
    <header className="flex flex-col gap-6 md:gap-[50px]">
      <NavBar />
      <SearchBar setKeyword={setKeyword} setDefinition={setDefinition} />
    </header>
  );
};

export default Header;
