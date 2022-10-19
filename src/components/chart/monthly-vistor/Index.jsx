import React from "react";
import Chart from "react-apexcharts";
import { COLOR_5 } from "../constants/Index";

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

  return <Chart options={data.options} series={data.series} width={500} />;
};

export default Visitor;
