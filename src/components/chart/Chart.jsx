import Vistor from "./components/Vistor";
import AgeGroup from "./components/AgeGroup";
import Post from "./components/Post";

import Viewer from "../board/components/Viewer";

const Chart = () => {
  return (
    <>
      <Vistor />
      <AgeGroup />
      <Post />
      <Viewer />
    </>
  );
};

export default Chart;
