import React from "react";
import Chart from "react-apexcharts";

const AgeGroup = () => {
  const data = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <h1>Age Group Chart</h1>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width={500}
      />
    </>
  );
};

export default AgeGroup;
