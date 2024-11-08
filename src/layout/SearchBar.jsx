import IconSearch from "../assets/icon-search.svg";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 grid-rows-1"
    >
      <input
        type="text"
        className="col-span-1 col-start-1 col-end-2 row-start-1 row-end-2 w-full rounded-2xl bg-white-200 px-6 py-[14px] text-base font-bold leading-[22px] focus:border focus:border-purple focus:outline-0 md:py-[22px] md:text-xl md:leading-5 lg:py-[19px]"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button
        type="submit"
        className="col-start-1 col-end-2 row-start-1 row-end-2 mr-6 justify-self-end"
      >
        <img
          src={IconSearch}
          alt="find keyword definition"
          className="h-4 w-4"
        />
      </button>
    </form>
  );
};

export default SearchBar;
