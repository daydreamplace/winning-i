import React from "react";
import Chart from "react-apexcharts";
import { COLOR_2 } from "./constants/ChartConstant";
import styled from "styled-components";

const Visitor = () => {
  const data = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: [COLOR_2],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
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
