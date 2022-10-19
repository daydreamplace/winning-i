import Vistor from "../monthly-vistor/Index";
import { Button } from "antd";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import AgeGroup from "../user-age-group/Index";
import Post from "../monthly-post/Index";
import styled from "styled-components";
import { DownloadOutlined } from "@ant-design/icons";

const Chart = () => {
  const onSave = () => {
    domtoimage.toBlob(document.getElementById("capture")).then((blob) => {
      saveAs(blob, "chart.png");
    });
  };

  return (
    <>
      <ImgSave type="primary" icon={<DownloadOutlined />} onClick={onSave}>
        Image Save
      </ImgSave>
      <div id="capture">
        <Charts>
          <Vistor />
          <AgeGroup />
          <Post />
        </Charts>
      </div>
    </>
  );
};

const Charts = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(50% -10px);

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImgSave = styled(Button)`
  margin-bottom: 10px;
`;

export default Chart;
