// TODO: onClick word search the definition for that word

const WordList = ({ type, words, styles }) => {
  return (
    <div className={`flex gap-6 ${styles}`}>
      <div className="text-white-400">{type}</div>
      <div className="flex flex-wrap gap-4 font-bold text-purple">
        {words.map((word, index) => (
          <span key={index} className="hover:cursor-pointer hover:underline">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordList;
