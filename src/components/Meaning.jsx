import WordList from "../components/WordList";

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
              <div>
                {definition.definition}

                <div className="mt-3 flex flex-col gap-3">
                  {definition.example && (
                    <p className="quote md:body-m text-white-400">
                      “{definition.example}”
                    </p>
                  )}

                  {definition.synonyms.length > 0 && (
                    <WordList
                      type="Synonyms"
                      words={definition.synonyms}
                      styles="body-s md:body-m"
                    />
                  )}

                  {definition.antonyms.length > 0 && (
                    <WordList
                      type="Antonyms"
                      words={meaning.antonyms}
                      styles="body-s md:body-m"
                    />
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* TODO: separate into a independent component */}

      {meaning.synonyms.length > 0 && (
        <WordList
          type="Synonyms"
          words={meaning.synonyms}
          styles="body-xm md:heading-s mt-6 md:mt-[40px]"
        />
      )}

      {meaning.antonyms.length > 0 && (
        <WordList
          type="Antonyms"
          words={meaning.antonyms}
          styles="body-xm md:heading-s mt-6 md:mt-[40px]"
        />
      )}
    </fieldset>
  );
};

export default Meaning;
