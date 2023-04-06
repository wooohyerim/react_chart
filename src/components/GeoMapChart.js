import React from "react";

import { ReactComponent as Africa } from "./images/Africa.svg";
import { ReactComponent as Asia } from "./images/Asia.svg";
import { ReactComponent as Australia } from "./images/Australia.svg";
import { ReactComponent as Europe } from "./images/Europe.svg";
import { ReactComponent as NorthAmerica } from "./images/North_America.svg";
import { ReactComponent as SouthAmerica } from "./images/South_America.svg";

import styled from "styled-components";

const GeoMapChart = ({ chartList }) => {
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
            <NorthAmericaBox>
              <NorthAmerica />
            </NorthAmericaBox>
            <SouthAmericaBox>
              <SouthAmerica />
            </SouthAmericaBox>
            <AfricaBox>
              <Africa />
            </AfricaBox>
            <EuropeBox>
              <Europe />
            </EuropeBox>
            <AsiaBox>
              <Asia />
            </AsiaBox>
            <AustrailaBox>
              <Australia />
            </AustrailaBox>
          </SvgWrapBox>
        </div>
      </GeoSection>
      <RankSection>
        <ChartTitle>북아메리카 수출 규모 순위</ChartTitle>
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
  left: 320px;
`;

const AsiaBox = styled.article`
  position: absolute;
  top: 10px;
  right: 0;
`;

const EuropeBox = styled.article`
  position: absolute;
  top: 10px;
  left: 303px;
`;

const AustrailaBox = styled.article`
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
  color: #707683;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
