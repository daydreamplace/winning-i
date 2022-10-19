import Vistor from "../monthly-vistor/Index";
import { Button } from "antd";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { DownloadOutlined } from "@ant-design/icons";
import AgeGroup from "../user-age-group/Index";
import Post from "../monthly-post/Index";
import styled from "styled-components";

const Chart = () => {
  const onSave = () => {
    domtoimage.toBlob(document.getElementById("capture")).then((blob) => {
      saveAs(blob, "chart.png");
    });
  };

  return (
    <ChartPage>
      <h1>CHART</h1>
      <div className="top">
        <Button type="primary" icon={<DownloadOutlined />} onClick={onSave}>
          Image Save
        </Button>
      </div>
      <div id="capture">
        <Charts>
          <Vistor />
          <AgeGroup />
          <Post />
        </Charts>
      </div>
    </ChartPage>
  );
};

const ChartPage = styled.div`
  padding: 20px;

  h1 {
    color: #3e82f7;
    font-weight: 600;
    font-size: 50px;
  }

  .top {
    display: flex;
    justify-content: flex-end;
  }
`;

const Charts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default Chart;
