import React from "react";
import Chart from "react-apexcharts";
import { COLOR_5 } from "../constants/Index";
import styled from "styled-components";

const Visitor = () => {
  const data = {
    series: [
      {
        name: "Monthly Vistor",
        data: [20, 28, 50, 30, 88, 75, 100],
      },
    ],
    options: {
      chart: {
        type: "line",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 5,
      },
      colors: [COLOR_5],
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      title: { text: "Monthly Vistor", align: "left" },
    },
  };

  return <ChartStyle options={data.options} series={data.series} />;
};

const ChartStyle = styled(Chart)`
  width: 30%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Visitor;
