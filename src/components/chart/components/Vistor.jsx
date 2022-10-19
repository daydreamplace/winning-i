import React from "react";
import Chart from "react-apexcharts";
import { COLOR_2 } from "./constants/ChartConstant";
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
      colors: [COLOR_2],
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
    },
  };

  return (
    <VistorChart>
      <h1>Monthly Vistor</h1>
      <Chart options={data.options} series={data.series} width={500} />
    </VistorChart>
  );
};

const VistorChart = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Visitor;
