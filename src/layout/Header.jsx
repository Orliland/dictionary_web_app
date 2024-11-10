import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = ({ keyword, setKeyword, setDefinitions }) => {
  return (
    <header className="flex flex-col gap-6 md:gap-[50px]">
      <NavBar />
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        setDefinitions={setDefinitions}
      />
    </header>
  );
};

export default Header;
