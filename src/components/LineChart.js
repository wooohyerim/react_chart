import React, { useState } from "react";

import ECharts from "echarts-for-react";

import styled from "styled-components";

const LineChart = ({ chartList }) => {
  const RankData = chartList.chart_rank;

  const [isChartLank, setIsChartLank] = useState(true);

  const RankChartList = RankData?.map((el, idx) => {
    if (isChartLank === false) {
      if (idx <= 4) {
        return;
      }
    } else if (isChartLank === true) {
      if (idx > 4) {
        return;
      }
    }

    const chartColor = [
      "rgba(10, 122, 89, 0.2)",
      "rgba(124, 177, 226, 0.2)",
      "rgba(243, 192, 107, 0.2)",
      "rgba(242, 113, 101, 0.2)",
      " rgba(180, 131, 243, 0.2)",
      "rgba(10, 122, 89, 0.2)",
      "rgba(124, 177, 226, 0.2)",
      "rgba(243, 192, 107, 0.2)",
      "rgba(242, 113, 101, 0.2)",
      " rgba(180, 131, 243, 0.2)",
    ];

    const LineOption = {
      grid: {
        left: 0,
        right: 0,
        top: "5px",
        bottom: 0, //차트 여백 없애기
      },
      xAxis: {
        type: "category",
        boundaryGap: true,
        show: false,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: el.value,
          type: "line",
          showSymbol: false,
          smooth: true,
          areaStyle: {},
          color: chartColor[idx],
        },
      ],
    };

    return (
      <DataBox key={idx}>
        <DataInnerBox>
          <ChartIdxBox>#{idx + 1}</ChartIdxBox>
          <div>
            <ChartListName>{el.goods_kor_name}</ChartListName>
            <ChartInfoText>수입 건수 {el.cnt}</ChartInfoText>
          </div>
        </DataInnerBox>
        <ECharts
          option={LineOption}
          style={{
            width: "180px",
            height: "25px",
            backgroundColor: "#F2F5FB",
          }}
        />
      </DataBox>
    );
  });

  return (
    <LineChartBox>
      <ChartTitle>상품별 수입 트랜드</ChartTitle>
      <ChartCategoryTitleBox>
        <CategoryTitle
          onClick={() => {
            setIsChartLank(true);
          }}
          titleBackColor={isChartLank === true && "#fff"}
          titleBorderRadius={isChartLank === true && "24px"}
          titleShadow={
            isChartLank === true && "4px 4px 8px -4px rgba(144, 160, 183, 0.5)"
          }
          titleColor={isChartLank === true && "#323c47"}
        >
          1~5위
        </CategoryTitle>
        <CategoryTitle
          onClick={() => {
            setIsChartLank(false);
          }}
          titleBackColor={isChartLank !== true && "#fff"}
          titleBorderRadius={isChartLank !== true && "24px"}
          titleShadow={
            isChartLank !== true && "4px 4px 8px -4px rgba(144, 160, 183, 0.5)"
          }
          titleColor={isChartLank !== true && "#323c47"}
        >
          6~10위
        </CategoryTitle>
      </ChartCategoryTitleBox>
      <InnerWrapBox>
        <div>{RankChartList}</div>
      </InnerWrapBox>
    </LineChartBox>
  );
};

export default LineChart;

const LineChartBox = styled.div`
  width: 448px;
  height: 418px;
  background: #fbfdff;
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
  width: 384px;
  height: 32px;
  margin: 8px 32px;
  padding: 4px;
  background: #ecf3fe;
  border-radius: 24px;
  cursor: pointer;
`;

const CategoryTitle = styled.p`
  width: 188px;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 4px 32px;
  border-bottom: 1px solid #dce7f6;

  :last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const DataBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  height: 46px;
  /* margin-left: 24px; */
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 1px solid #dce7f6;

  :last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const DataInnerBox = styled.div`
  display: flex;
`;

const ChartIdxBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  padding: 8px 6px;
  background: #dce7f6;
  border: 1px solid #dce7f6;
  border-radius: 4px;
  color: #323c47;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

const ChartListName = styled.p`
  color: #323c47;
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
