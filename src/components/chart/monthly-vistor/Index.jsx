import React from "react";
import Chart from "react-apexcharts";
import { COLOR_5 } from "../constants/Index";
import styled from "styled-components";

const Visitor = ({ chartData }) => {
  const data = {
    series: [
      {
        name: "Monthly Vistor",
        data: chartData,
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

  return (
    <ChartPage>
      <ChartStyle options={data.options} series={data.series} />
    </ChartPage>
  );
};

const ChartPage = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding: 10px;
  padding-right: 20px;
  border: 1px solid #ebebeb;
  border-radius: 5px;

  @media (max-width: 1280px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ChartStyle = styled(Chart)`
  width: 100%;
`;

export default Visitor;
