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
      title: { text: "Monthly Vistor", align: "center" },
    },
  };

  return <ChartStyle options={data.options} series={data.series} />;
};

const ChartStyle = styled(Chart)`
  display: flex;
  align-items: center;
  width: 30%;
  background-color: #ebebeb;
  border: 1px solid transparent;
  border-radius: 5px;

  @media (max-width: 1280px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export default Visitor;
