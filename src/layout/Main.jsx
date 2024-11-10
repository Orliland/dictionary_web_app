import Definition from "./Definition";
import Landing from "./Landing";

const Main = ({ definitions }) => {
  switch (definitions) {
    case null: {
      return (
        <Landing
          icon="⌨️"
          title="Start typing the keyword"
          description="Write the word you want to know the meaning of and press ENTER. We take care of the rest."
        />
      );
    }

    case "loading": {
      return (
        <Landing
          icon={<span className="block animate-spin">⌨️</span>}
          title="Wait a moment"
        />
      );
    }

    case false: {
      return (
        <Landing
          icon="😕"
          title="No Definitions Found"
          description="Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
        />
      );
    }

    default: {
      return <Definition definitions={definitions} />;
    }
  }
};

export default Main;
