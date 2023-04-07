import axios from "axios";
import React, { useState, useEffect } from "react";

import Flag from "react-world-flags";

import { ReactComponent as Africa } from "./images/Africa.svg";
import { ReactComponent as Asia } from "./images/Asia.svg";
import { ReactComponent as Australia } from "./images/Australia.svg";
import { ReactComponent as Europe } from "./images/Europe.svg";
import { ReactComponent as NorthAmerica } from "./images/North_America.svg";
import { ReactComponent as SouthAmerica } from "./images/South_America.svg";

import styled from "styled-components";

const GeoMapChart = ({ setIsSelectCode, isSelectCode, BASE_URL }) => {
  const [mapData, setMapData] = useState([]);

  const handleClickCode = (code) => {
    setIsSelectCode(code);
  };

  const addClickChartList = () => {
    const params = new URLSearchParams();
    params.append("item", "망고");
    params.append("code", isSelectCode);

    axios
      .post(`${BASE_URL}/api/request/dash_board_chart_map`, params)
      .then((res) => {
        console.log(res.data);
        setMapData(res.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    addClickChartList();
  }, [isSelectCode]);

  return (
    <GeoMapWrapBox>
      <GeoSection>
        <div>
          <ChartTitle>각 대륙 별 국가 수출 규모</ChartTitle>
          <TitleDescription>
            원하시는 대륙을 선택하여 국내로 수출하는 공급사 규모와 수출 건수를
            알아보세요.
          </TitleDescription>
          <SvgWrapBox>
            <NorthAmericaBox
              onClick={() => {
                handleClickCode("4");
                addClickChartList();
              }}
            >
              <NorthSvg
                clickwidth={isSelectCode === "4" ? "1" : "0"}
                clickfill={isSelectCode === "4" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "4" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "4" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="120px"
                positionLeft="100px"
                clickBgColor={isSelectCode === "4" && "#14634F"}
                clickColor={isSelectCode === "4" ? "#fff" : ""}
                clickRadius={isSelectCode === "4" && "40px"}
              >
                북아메리카
              </SvgTitle>
            </NorthAmericaBox>
            <SouthAmericaBox
              onClick={() => {
                handleClickCode("5");
                addClickChartList();
              }}
            >
              <SouthSvg
                clickwidth={isSelectCode === "5" ? "1" : "0"}
                clickfill={isSelectCode === "5" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "5" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "5" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="50px"
                positionLeft="10px"
                clickBgColor={isSelectCode === "5" && "#14634F"}
                clickColor={isSelectCode === "5" ? "#fff" : ""}
                clickRadius={isSelectCode === "5" && "40px"}
              >
                남아메리카
              </SvgTitle>
            </SouthAmericaBox>
            <AfricaBox
              onClick={() => {
                handleClickCode("3");
                addClickChartList();
              }}
            >
              <AfricaSvg
                clickwidth={isSelectCode === "3" ? "1" : "0"}
                clickfill={isSelectCode === "3" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "3" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "3" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="50px"
                positionLeft="40px"
                clickBgColor={isSelectCode === "3" && "#14634F"}
                clickColor={isSelectCode === "3" ? "#fff" : ""}
                clickRadius={isSelectCode === "3" && "40px"}
              >
                아프리카
              </SvgTitle>
            </AfricaBox>
            <EuropeBox
              onClick={() => {
                handleClickCode("2");
                addClickChartList();
              }}
            >
              <EuropeSvg
                clickwidth={isSelectCode === "2" ? "1" : "0"}
                clickfill={isSelectCode === "2" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "2" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "2" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="90px"
                positionLeft="90px"
                clickBgColor={isSelectCode === "2" && "#14634F"}
                clickColor={isSelectCode === "2" ? "#fff" : ""}
                clickRadius={isSelectCode === "2" && "40px"}
              >
                유럽
              </SvgTitle>
            </EuropeBox>
            <AsiaBox
              onClick={() => {
                handleClickCode("1");
                addClickChartList();
              }}
            >
              <AsiaSvg
                clickwidth={isSelectCode === "1" ? "1.5" : "0"}
                clickfill={isSelectCode === "1" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "1" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "1" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="100px"
                positionLeft="100px"
                clickBgColor={isSelectCode === "1" && "#14634F"}
                clickColor={isSelectCode === "1" ? "#fff" : ""}
                clickRadius={isSelectCode === "1" && "40px"}
              >
                아시아
              </SvgTitle>
            </AsiaBox>
            <OceaniaBox
              onClick={() => {
                handleClickCode("6");
                addClickChartList();
              }}
            >
              <OceaniaSvg
                clickwidth={isSelectCode === "6" ? "1" : "0"}
                clickfill={isSelectCode === "6" ? "#C9E9E1" : "#ECF3FE"}
                clickstroke={isSelectCode === "6" ? "#61AD96" : ""}
                filtershadow={
                  isSelectCode === "6" ? "drop-shadow(0px 2px 0px #61ad96)" : ""
                }
              />
              <SvgTitle
                positionTop="40px"
                positionLeft="5px"
                clickBgColor={isSelectCode === "6" && "#14634F"}
                clickColor={isSelectCode === "6" ? "#fff" : ""}
                clickRadius={isSelectCode === "6" && "40px"}
              >
                오세아니아
              </SvgTitle>
            </OceaniaBox>
          </SvgWrapBox>
        </div>
      </GeoSection>
      <RankSection>
        <ChartTitle>{mapData.continent} 수출 규모 순위</ChartTitle>
        <RankTitle>
          <p>국가</p>
          <p>공급사</p>
          <p>수출건수</p>
        </RankTitle>
        {mapData?.chart_map?.length === 0 ? (
          <NotFoundBox>
            <img src="/assets/images/not_found.png" alt="no" />
            <p>해당 상품에 대한 수출 내역이 없습니다.</p>
          </NotFoundBox>
        ) : (
          mapData?.chart_map?.map((el, i) => {
            return (
              <RankValueBox key={i}>
                <p>
                  <Flag code={el.code2} width="20" />
                  <span>{el.export_country_name}</span>
                </p>
                <p>{el.cnt}</p>
                <p>{el.cnt2}</p>
              </RankValueBox>
            );
          })
        )}
      </RankSection>
    </GeoMapWrapBox>
  );
};

export default GeoMapChart;

const GeoMapWrapBox = styled.div`
  display: flex;
  width: 1156px;
  height: 512px;
  /* background-color: #fff;
  border: 1px solid #dce7f6;
  border-radius: 24px; */
`;

const GeoSection = styled.section`
  width: 802px;
  height: 100%;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #dce7f6;
  border-radius: 24px 0px 0px 24px;
`;

const SvgWrapBox = styled.div`
  position: relative;
  cursor: pointer;
`;

const SvgTitle = styled.p`
  position: absolute;
  top: ${(props) => props.positionTop || ""};
  left: ${(props) => props.positionLeft || ""};
  width: 88px;
  height: 24px;
  padding: 8px;
  font-size: 10px;
  font-weight: 400;
  color: ${(props) => props.clickColor || "#90A0B7"};
  background-color: ${(props) => props.clickBgColor};
  border-radius: ${(props) => props.clickRadius};
  text-align: center;
`;

const NorthAmericaBox = styled.article`
  position: absolute;
  top: 10px;
`;

const SouthAmericaBox = styled.article`
  position: absolute;
  top: 220px;
  left: 170px;
`;

const AfricaBox = styled.article`
  position: absolute;
  top: 160px;
  left: 328px;
`;

const AsiaBox = styled.article`
  position: absolute;
  top: 15px;
  right: -420px;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
`;

const EuropeBox = styled.article`
  position: absolute;
  top: 8px;
  left: 310px;
`;

const OceaniaBox = styled.article`
  position: absolute;
  top: 250px;
  right: 0;
`;

const RankSection = styled.section`
  width: 354px;
  height: 100%;
  padding: 24px;
  border: 1px solid #dce7f6;
  border-left: 0px;
  border-radius: 0px 24px 24px 0px;
  background-color: #fbfdff;
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

const RankTitle = styled.div`
  display: flex;
  width: 298px;
  height: 32px;
  margin-top: 16px;

  p {
    font-size: 12px;
    font-weight: 500;
    color: rgb(112, 118, 131);
    line-height: 16px;
  }

  p:nth-child(1) {
    width: 150px;
  }

  p:nth-child(2) {
    width: 80px;
  }
`;

const RankValueBox = styled.div`
  display: flex;
  width: 298px;
  padding: 4px;
  /* height: 16px; */
  margin-bottom: 8px;

  :hover {
    width: 298px;
    /* height: 16px; */
    padding: 4px;
    border: 1px solid rgb(97, 173, 150);
    border-radius: 4px;
    background-color: rgb(230, 244, 241);
  }

  p:nth-child(1) {
    width: 150px;

    span {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 500;
      color: rgb(50, 60, 71);
      line-height: 16px;
    }
  }

  p:nth-child(2) {
    width: 80px;
    font-size: 12px;
    font-weight: 500;
    color: rgb(50, 60, 71);
    line-height: 16px;
  }

  p:nth-child(3) {
    font-size: 12px;
    font-weight: 500;
    color: rgb(50, 60, 71);
    line-height: 16px;
  }
`;

const NotFoundBox = styled.div`
  position: relative;
  top: 30%;
  left: 50%;
  width: 100%;
  height: 100px;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    margin-top: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #90a0b7;
  }
`;

////////////////svg style////////////

const NorthSvg = styled(NorthAmerica)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;

const SouthSvg = styled(SouthAmerica)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;

const AfricaSvg = styled(Africa)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;

const EuropeSvg = styled(Europe)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;

const AsiaSvg = styled(Asia)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;

const OceaniaSvg = styled(Australia)`
  filter: ${(props) => props.filtershadow || ""};

  & path {
    fill: ${(props) => props.clickfill || ""};
    stroke: ${(props) => props.clickstroke || ""};
    stroke-width: ${(props) => props.clickwidth || "0"};
    transition: all 0.2s;
  }
`;
