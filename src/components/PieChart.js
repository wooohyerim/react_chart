import React, { useState } from "react";

import ECharts from "echarts-for-react";

import styled from "styled-components";

const PieChart = ({ chartList }) => {
  const pieChartList = chartList?.chart_supply_rank;

  const [isClick, setIsClick] = useState(true);

  const supplyData = [];

  const chartColor = [
    "rgba(10, 122, 89, 0.2)",
    "rgba(243, 192, 107, 0.2)",
    "rgba(242, 113, 101, 0.2)",
    "rgba(120, 200, 235, 0.2)",
    "rgba(148, 146, 252, 0.2)",
  ];

  const chartBorderColor = [
    "#0A7A59",
    "#F3C06B",
    "#F27165",
    "#78C8EB",
    "#9492FC",
  ];

  pieChartList &&
    pieChartList.forEach((it, idx) => {
      if (idx <= 4) {
        return supplyData.push({
          name: `${it.goods_kor_name}`,
          value: `${isClick === true ? it.cnt : it.cnt2}`,
        });
      }
    }); //갯수제한

  const dataList = supplyData?.map((el, i) => {
    return (
      <DataBox key={i}>
        <ChartIdxBox
          style={{
            backgroundColor: chartColor[i % chartColor.length],
            border: `1px solid ${
              chartBorderColor[i % chartBorderColor.length]
            }`,
          }}
        >
          #{i + 1}
        </ChartIdxBox>
        <div>
          <ChartListName>{el.name}</ChartListName>
          <ChartInfoText>
            {el.value} {isClick === true ? "공급사" : "수입사"}
          </ChartInfoText>
        </div>
      </DataBox>
    );
  });

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            formatter: (params) => {
              const currentData = supplyData.find(
                (data) => data.name === params.name
              );
              return [
                `{name|${currentData.name}}`,
                `{supply|${isClick === true ? "공급사" : "수입사"}}`,
                `{value|${currentData.value}}`,
              ].join("\n");
            },

            rich: {
              name: {
                color: "#323C47",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 16,
              },
              supply: {
                color: "#90A0B7",
                fontWeight: 400,
                fontSize: 10,
                lineHeight: 14,
              },
              value: {
                color: "#323C47",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 16,
              },
            },
          },
        },
        labelLine: {
          show: true,
        },
        data: supplyData.map((el) => {
          return {
            value: el.value,
            name: el.name,
          };
        }),
        color: chartColor,
      },
    ],
  };

  return (
    <PieChartBox>
      <ChartTitle>상품별 공급/수입사 수</ChartTitle>
      <ChartCategoryTitleBox>
        <CategoryTitle
          onClick={() => {
            setIsClick(true);
          }}
          titleBackColor={isClick === true && "#fff"}
          titleBorderRadius={isClick === true && "24px"}
          titleShadow={
            isClick === true && "4px 4px 8px -4px rgba(144, 160, 183, 0.5)"
          }
          titleColor={isClick === true && "#323c47"}
        >
          공급사
        </CategoryTitle>
        <CategoryTitle
          onClick={() => {
            setIsClick(false);
          }}
          titleBackColor={isClick !== true && "#fff"}
          titleBorderRadius={isClick !== true && "24px"}
          titleShadow={
            isClick !== true && "4px 4px 8px -4px rgba(144, 160, 183, 0.5)"
          }
          titleColor={isClick !== true && "#323c47"}
        >
          수입사
        </CategoryTitle>
      </ChartCategoryTitleBox>
      <InnerWrapBox>
        <ECharts
          option={option}
          style={{ width: "330px", height: "300px", marginTop: "-12px" }}
        />
        <DataListBox>{dataList}</DataListBox>
      </InnerWrapBox>
    </PieChartBox>
  );
};

export default PieChart;

const PieChartBox = styled.div`
  width: 684px;
  min-height: 398px;
  margin: 20px auto;
  background-color: #fbfdff;
  border: 1px solid #dce7f6;
  border-radius: 24px;
`;

const ChartTitle = styled.h1`
  padding: 24px 24px 24px 32px;
  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const ChartCategoryTitleBox = styled.div`
  display: flex;
  align-items: center;
  width: 620px;
  height: 32px;
  margin: 8px 32px;
  padding: 4px;
  background: #ecf3fe;
  border-radius: 24px;
  cursor: pointer;
`;

const CategoryTitle = styled.p`
  width: 306px;
  height: 24px;
  padding: 4px;
  background-color: ${(props) => props.titleBackColor || ""};
  border-radius: ${(props) => props.titleBorderRadius || ""};
  box-shadow: ${(props) => props.titleShadow || ""};
  text-align: center;
  color: ${(props) => props.titleColor || "#90a0b7"};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const InnerWrapBox = styled.div`
  display: flex;
`;

const DataListBox = styled.div`
  margin-top: 24px;
`;

const DataBox = styled.div`
  display: flex;
  align-items: center;
  width: 298px;
  height: 46px;
  margin-left: 24px;
  margin-bottom: 4px;
  border-bottom: 1px solid #dce7f6;

  :last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const ChartIdxBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  padding: 8px;
  background-color: pink;
  border-radius: 4px;
  color: #323c47;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const ChartListName = styled.p`
  color: #323c47;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.002em;
`;

const ChartInfoText = styled.span`
  color: #90a0b7;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.002em;
`;
