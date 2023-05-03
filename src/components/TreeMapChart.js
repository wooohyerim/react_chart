import React from "react";
import ECharts from "echarts-for-react";

import styled from "styled-components";

const TreeMapChart = ({ chartList }) => {
  const treeData = chartList?.chart_country;

  const treeDataList = treeData?.map((el, i) => {
    const chartColor = [
      "#14634F",
      "#0B7B5B",
      "#1B8F70",
      "#34A185",
      "#64AF98",
      "#80BDAB",
      "#99CBBC",
      "#B1D8CD",
      "#C9E4DD",
      "#DFF1ED",
    ];
    return {
      name: el.country,
      value: el.cnt,
      label: {
        formatter: (params) => {
          // const countryCode = treeData.map((el) => {
          //   return `https://flagcdn.com/${el.code2.toLowerCase()}.svg`;
          // });
          // console.log(countryCode[params.dataIndex - 1]);
          return [
            `{name| #${params.dataIndex}} {image|} {name|${params.name}}`,
            `{value|${"수입 건수 : " + params.value}}`,
          ].join("\n");
        },
        rich: {
          image: {
            backgroundColor: {
              image: `https://flagcdn.com/${el?.code2?.toLowerCase()}.svg`,
            },
            width: 20,
            height: 15,
            align: "left",
          },
          name: {
            fontSize: i < 2 ? 12 : 10,
            fontWeight: 700,
            lineHeight: 16,
            color: i < 5 ? "#fff" : "#323C47",
          },
          value: {
            fontSize: 10,
            fontWeight: 400,
            color: i < 5 ? "rgba(255, 255, 255, 0.6)" : "rgba(50, 60, 71, 0.6)",
            lineHeight: 14,
          },
        },
      },
      itemStyle: {
        normal: {
          color: chartColor[i],
        },
      },
    };
  });

  const option = {
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.5)",
      textStyle: {
        color: "#fff",
      },
      formatter: (params) => {
        const allSumCnt = treeData?.reduce(
          (acc, cur) => acc + Number(cur.cnt),
          0
        ); // 총 cnt 더한 값
        const FlagImage = treeData?.map((data) => {
          return `https://flagcdn.com/${data?.code2?.toLowerCase()}.svg`;
        }); // 국기 flag

        const cntPercentage = treeData?.map((el) => {
          return Number(el.cnt);
        });
        return [
          `#${params.dataIndex}   <img src=${
            FlagImage[params.dataIndex - 1]
          } height="15px" alt="img">${params.name}  <br />
          분포 : ${(
            (cntPercentage[params.dataIndex - 1] / allSumCnt) *
            100
          ).toFixed(0)}% <br />
          수입건수 : ${params.value}`,
        ].join("\n");
      },
    },
    series: [
      {
        type: "treemap",
        roam: false, //고정
        breadcrumb: false, // 막대 없애기
        data: treeDataList,
        itemStyle: {
          gapWidth: 5,
          gapHeight: 5,
          borderRadius: 8,
        },
        nodeClick: false, //click 시 이동 방지
      },
    ],
  };

  return (
    <TreeChartBox>
      <ChartTitle>국가별 수출 규모 분포</ChartTitle>
      <ECharts
        option={option}
        style={{
          width: "640px",
          height: "340px",
          marginTop: "-30px",
          marginLeft: "-40px",
        }}
      />
    </TreeChartBox>
  );
};

export default TreeMapChart;

const TreeChartBox = styled.div`
  width: 566px;
  height: 392px;
  margin-right: 24px;
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
