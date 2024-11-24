import Landing from "./Landing";
import { lazy } from "react";

const Definition = lazy(() => import("./Definition"));

const Main = ({ definitions, isLoading, error }) => {
  if (isLoading) {
    return (
      <Landing
        icon={<span className="block animate-spin">⌨️</span>}
        title="Wait a moment"
      />
    );
  } else if (error) {
    return (
      <Landing
        icon="😕"
        title="No Definitions Found"
        description="Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead."
      />
    );
  } else if (definitions == null) {
    return (
      <Landing
        icon="⌨️"
        title="Start typing the keyword"
        description="Write the word you want to know the meaning of and press ENTER. We take care of the rest."
      />
    );
  } else {
    return <Definition definitions={definitions} />;
  }
};

export default Main;
