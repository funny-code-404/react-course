import styled from "styled-components";
import { HotelsSearchFormList } from "./SearchForm/HotelsSearch/HotelsSearchFormList";

export function TopSection() {
  return (
    <TopSectionBlock className="top-section">
      <HotelsSearchFormList />
    </TopSectionBlock>
  );
}

const backgroundImg = require("../../assets/top-section-bg.png");

export const TopSectionBlock = styled.div`
  background: url(${backgroundImg});
`;
