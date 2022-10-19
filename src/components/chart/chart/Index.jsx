import { useState, useEffect } from "react";
import { apiClient } from "../../../api/client";
import { Button } from "antd";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { DownloadOutlined } from "@ant-design/icons";
import AgeGroup from "../user-age-group/Index";
import Post from "../monthly-post/Index";
import Vistor from "../monthly-vistor/Index";
import styled from "styled-components";

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    apiClient.get("/chart").then((res) => {
      setChartData(res.data);
    });
  }, []);

  const onSave = () => {
    domtoimage.toBlob(document.getElementById("capture")).then((blob) => {
      saveAs(blob, "chart.png");
    });
  };

  return (
    <ChartPage>
      <h1>CHART</h1>
      <div className="button">
        <Button type="primary" icon={<DownloadOutlined />} onClick={onSave}>
          Image Save
        </Button>
      </div>
      <div id="capture">
        <Charts>
          <Vistor chartData={chartData?.vistor} />
          <AgeGroup />
          <Post chartData={chartData?.post} />
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

  .button {
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
