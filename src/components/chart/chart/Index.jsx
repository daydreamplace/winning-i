import Vistor from "../monthly-vistor/Index";
import AgeGroup from "../user-age-group/Index";
import Post from "../monthly-post/Index";
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
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default Chart;
