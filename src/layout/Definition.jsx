import IconPlay from "../assets/icon-play.svg";
import IconNewWindow from "../assets/icon-new-window.svg";

const Definition = ({ definition }) => {
  console.log(definition[0]);
  return (
    <main className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="heading-mobile md:heading-l">{definition[0].word}</h1>
          <span className="body-m md:heading-m text-purple">
            {definition[0].phonetic}
          </span>
        </div>
        <button className="grid h-12 w-12 place-items-center rounded-full md:h-[75px] md:w-[75px]">
          <img src={IconPlay} alt="Play pronunciation" />
        </button>
      </div>

      <div className="flex flex-col border-t-[1px] border-white-300 pt-6 md:flex-row md:pt-[22px] lg:pt-5">
        <h3 className="body-s mb-2 text-white-400 underline md:m-0 md:mr-[25px] md:no-underline lg:mr-[21px]">
          Source
        </h3>
        <div className="flex flex-col gap-2">
          {definition[0].sourceUrls.map((source, index) => {
            return (
              <a
                href={source}
                key={index}
                target="_blank"
                className="body-s text-wrap text-black-200 underline md:no-underline"
              >
                {source}

                <img
                  src={IconNewWindow}
                  className="ml-2 inline h-3 w-3"
                  alt="Open source in a new window"
                />
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Definition;
