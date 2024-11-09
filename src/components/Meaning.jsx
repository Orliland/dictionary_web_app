const Meaning = ({ meaning }) => {
  return (
    <fieldset className="border-t-[1px] border-white-300">
      <legend className="body-m md:heading-m mb-8 pr-4 font-bold italic md:pr-5 md:font-bold">
        {meaning.partOfSpeech}
      </legend>

      <h3 className="body-xm md:heading-s mb-[17px] text-white-400 md:mb-[27px]">
        Meaning
      </h3>
      <ul className="flex flex-col gap-[13px]">
        {meaning.definitions.map((definition, index) => {
          // TODO: add synonyms, antonyms and examples
          return (
            <li
              key={index}
              className="quote md:body-m grid grid-cols-[auto_1fr] gap-5 text-black-200"
            >
              <span className="mt-[10px] block h-[5px] w-[5px] rounded-full bg-purple"></span>
              <p className="">{definition.definition}</p>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
};

export default Meaning;
