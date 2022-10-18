import Vistor from "./components/Vistor";
import AgeGroup from "./components/AgeGroup";
import Post from "./components/Post";
import styled from "styled-components";

const Chart = () => {
  return (
    <Charts>
      <Vistor />
      <AgeGroup />
      <Post />
    </Charts>
  );
};

const Charts = styled.div`
  display: flex;
`;

export default Chart;
