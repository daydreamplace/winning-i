import React from "react";
import Chart from "react-apexcharts";

const Post = () => {
  const data = {
    series: [
      {
        name: "Monthly Post",
        data: [20, 26, 53, 98, 100, 72, 50],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {},
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "55%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      title: { text: "Monthly Post", align: "left" },
    },
  };

  return (
    <Chart options={data.options} series={data.series} type="bar" width={500} />
  );
};

export default Post;
