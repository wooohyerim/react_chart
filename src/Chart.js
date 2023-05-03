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
  const [isSelectCode, setIsSelectCode] = useState("1");
  const [searchItem, setSearchItem] = useState("망고");

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const onChangeItem = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchItem = () => {
    if (searchItem.length === 0) {
      alert("관심상품을 입력해 주세요.");
    } else {
      const params = new URLSearchParams();
      params.append("item", searchItem);

      axios
        .post(`${BASE_URL}/api/request/dash_board_chart`, params)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log("error", error));
    }
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("item", searchItem);

    axios
      .post(`${BASE_URL}/api/request/dash_board_chart`, params)
      .then((res) => {
        // console.log(res.data);
        setChartList(res.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <WrapBox>
      <SearchWrap>
        <ChartTitle>관심상품을 검색해 시장정보를 확인하세요.</ChartTitle>
        <TitleDescription>
          상품명 혹은 원재료명으로 검색해 주세요.
        </TitleDescription>
        <section>
          <SearchInput
            type="text"
            value={searchItem}
            onChange={onChangeItem}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearchItem();
              }
            }}
          />
          <SearchBtn type="button" onClick={handleSearchItem}>
            상품검색
          </SearchBtn>
        </section>
      </SearchWrap>
      <ChartTitle>{searchItem}의 국내 수입 현황</ChartTitle>
      <TitleDescription>
        선택하신 상품의 해외에서 국내로 유입되는 규모, 분포, 순위, 건수, 트렌드
        및 공급사 수와 같은 데이터를 제공해 드립니다.
      </TitleDescription>

      <FirstSection>
        <GeoMapChart
          isSelectCode={isSelectCode}
          setIsSelectCode={setIsSelectCode}
          BASE_URL={BASE_URL}
          searchItem={searchItem}
        />
      </FirstSection>
      <SecondSection>
        <TreeMapChart chartList={chartList} />
        <BarChart chartList={chartList} />
      </SecondSection>
      <ThirdSection>
        <LineChart chartList={chartList} />
        <PieChart chartList={chartList} />
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

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1156px;
  height: 174px;
  margin-bottom: 24px;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #dce7f6;
  border-radius: 24px;
`;

const ChartTitle = styled.h1`
  /* padding: 24px 24px 24px 32px; */
  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const TitleDescription = styled.span`
  margin-bottom: 8px;
  color: #707683;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const SearchInput = styled.input`
  width: 566px;
  height: 48px;
  margin-right: 16px;
  padding: 16px;
  border: 1px solid #dce7f6;
  border-radius: 16px;
  outline: none;
`;

const SearchBtn = styled.button`
  width: 145px;
  height: 48px;
  background-color: #323c47;
  border: none;
  border-radius: 16px;
  color: #fff;
  font-weight: 700;
`;
