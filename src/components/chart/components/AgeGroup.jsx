import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

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
    <AgeChart>
      <h1>Age Group Chart</h1>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width={500}
      />
    </AgeChart>
  );
};

const AgeChart = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AgeGroup;
