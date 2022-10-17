import React from "react";
import Chart from "react-apexcharts";
import { COLOR_2 } from "./constants/ChartConstant";

const Visitor = () => {
  return (
    <Chart
      options={{
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
      }}
      series={[
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ]}
      height={300}
    />
  );
};

export default Visitor;
