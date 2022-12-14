import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Post = ({ chartData }) => {
  const data = {
    series: [
      {
        name: "Monthly Post",
        data: chartData,
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
      title: { text: "Monthly Post", align: "center" },
    },
  };

  return (
    <ChartPage>
      <ChartStyle options={data.options} series={data.series} type="bar" />
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

export default Post;
