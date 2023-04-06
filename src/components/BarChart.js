import React from "react";

import ECharts from "echarts-for-react";

import styled from "styled-components";

const BarChart = ({ chartList }) => {
  const barChartList = chartList?.chart_month;

  let month = [];
  let monthData = [];

  barChartList?.map((el) => {
    month.push(el.month.split("-").slice(1));
    monthData.push(el.cnt);

    // console.log("month", month);
    // console.log("monthData", monthData);
  });

  const chartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(0,0,0,0.5)",
      borderWidth: 0,
      textStyle: {
        color: "#fff",
      },
      formatter: function (params) {
        // console.log(params);
        return "수입 건수 : " + params[0].data;
      },
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "1%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: month,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    label: {
      show: true,
      position: "top",
      color: "#747a97",
      fontSize: "10px",
      fontWeight: "600",
    },
    series: [
      {
        name: "수입 건수",
        type: "bar",
        barWidth: "70%",
        color: "#C9E9E1",
        data: monthData,
        hoverable: true,
        itemStyle: {
          normal: {
            borderColor: "#0A7A59",
            borderType: "solid",
          },
          emphasis: {
            color: "#0A7A59",
          },
        },
      },
    ],
  };

  return (
    <BarChartBox>
      <ChartTitle>월별 국내 수입 건수</ChartTitle>
      <ECharts
        option={chartOption}
        style={{ width: "502px", height: "280px" }}
      />
    </BarChartBox>
  );
};

export default BarChart;

const BarChartBox = styled.div`
  width: 566px;
  height: 392px;
  margin: 20px 0;
  background-color: #fbfdff;
  border: 1px solid #dce7f6;
  border-radius: 24px;
`;

const ChartTitle = styled.h1`
  padding: 24px;
  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
