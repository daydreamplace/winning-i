import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Post = () => {
  const data = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
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
          columnWidth: "45%",
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
        categories: [
          ["John", "Doe"],
          ["Joe", "Smith"],
          ["Jake", "Williams"],
          "Amber",
          ["Peter", "Brown"],
          ["Mary", "Evans"],
          ["David", "Wilson"],
          ["Lily", "Roberts"],
        ],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <PostChart>
      <h1>Monthly Post</h1>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width={500}
      />
    </PostChart>
  );
};

const PostChart = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Post;
