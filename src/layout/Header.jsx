import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ setKeyword }) => {
  return (
    <header className="flex flex-col gap-6 md:gap-[50px]">
      <NavBar />
      <SearchBar setKeyword={setKeyword} />
    </header>
  );
};

export default Header;
