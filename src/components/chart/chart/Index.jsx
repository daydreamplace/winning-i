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
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
  padding: 0 10px;
`;

export default Chart;
