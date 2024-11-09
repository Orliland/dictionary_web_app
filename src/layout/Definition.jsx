import IconPlay from "../assets/icon-play.svg";
import IconNewWindow from "../assets/icon-new-window.svg";
import Meaning from "../components/Meaning";
import { useRef } from "react";

const DefinitionItem = ({ definition }) => {
  const audioElement = useRef(null);

  let phonetic;

  if (definition.phonetic) {
    phonetic = definition.phonetics.find(
      (item) => item.text === definition.phonetic,
    );
  } else {
    phonetic = { text: "", audio: "" };
  }

  return (
    <section className="flex flex-col gap-8 md:gap-[39px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="heading-mobile md:heading-l">{definition.word}</h1>
          <span className="body-m md:heading-m text-purple">
            {phonetic.text}
          </span>
        </div>
        {phonetic.audio.length > 0 && (
          <div>
            <audio
              ref={audioElement}
              src={phonetic.audio}
              className="hidden"
            ></audio>
            <button
              onClick={() => {
                audioElement.current.play();
              }}
              className="grid h-12 w-12 place-items-center rounded-full md:h-[75px] md:w-[75px]"
            >
              <img src={IconPlay} alt="Play pronunciation" />
            </button>
          </div>
        )}
      </div>

      {/* TODO: separate into independent component */}

      {definition.meanings.map((meaning, index) => (
        <Meaning meaning={meaning} key={index} />
      ))}

      <div className="flex flex-col border-t-[1px] border-white-300 pt-6 md:flex-row md:pt-[22px] lg:pt-5">
        <h3 className="body-s mb-2 text-white-400 underline md:m-0 md:mr-[25px] md:no-underline lg:mr-[21px]">
          Source
        </h3>
        <div className="flex flex-col gap-2">
          {/* TODO: separate into independent component */}
          {definition.sourceUrls.map((source, index) => {
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
    </section>
  );
};

const Definition = ({ definitions }) => {
  return (
    <main className="flex flex-col gap-28">
      {definitions.map((definition, index) => {
        return <DefinitionItem key={index} definition={definition} />;
      })}
    </main>
  );
};

export default Definition;
