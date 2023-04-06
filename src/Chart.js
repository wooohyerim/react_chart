import axios from "axios";

import React, { useEffect, useState } from "react";

import TreeMapChart from "./components/TreeMapChart.js";
import GeoMapChart from "./components/GeoMapChart.js";
import BarChart from "./components/BarChart.js";
import PieChart from "./components/PieChart.js";
import LineChart from "./components/LineChart.js";

import styled from "styled-components";

const Chart = () => {
  const [chartList, setChartList] = useState([]);
  let itemName = "";

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("item", "망고");

    axios
      .post("https://api.silkone.co.kr/api/request/dash_board_chart")
      .then((res) => {
        console.log(res.data);
        setChartList(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <WrapBox>
      <FirstSection>
        <GeoMapChart chartList={chartList} />
      </FirstSection>
      <SecondSection>
        <TreeMapChart chartList={chartList} />
        <BarChart chartList={chartList} />
      </SecondSection>
      <ThirdSection>
        <LineChart chartList={chartList} />
        <PieChart chartList={chartList} itemName={itemName} />
      </ThirdSection>
    </WrapBox>
  );
};

export default Chart;

const WrapBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const FirstSection = styled.section`
  align-items: center;
  width: 1200px;
  margin: 20px auto;
`;

const SecondSection = styled.section`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 20px auto;
`;

const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;
