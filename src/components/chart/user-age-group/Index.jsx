import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const AgeGroup = () => {
  const data = {
    series: [59, 65, 41, 40, 38],
    options: {
      labels: ["20's", "30's", "40's", "50's", "60's"],
      title: { text: "User Age Group", align: "left" },
    },
  };

  return (
    <ChartStyle
      options={data.options}
      series={data.series}
      type="pie"
      width={"100%"}
    />
  );
};

const ChartStyle = styled(Chart)`
  width: 30%;
  background-color: #ebebeb;
  border: 1px solid transparent;
  border-radius: 5px;

  @media (max-width: 1280px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export default AgeGroup;
