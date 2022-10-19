import React from "react";
import Chart from "react-apexcharts";

const AgeGroup = () => {
  const data = {
    series: [59, 65, 41, 40, 38],
    options: {
      labels: ["20's", "30's", "40's", "50's", "60's"],
      title: { text: "User Age Group", align: "left" },
    },
  };

  return (
    <Chart options={data.options} series={data.series} type="pie" width={450} />
  );
};

export default AgeGroup;
