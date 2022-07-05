import styled from "styled-components";
import { LightTheme } from "../../styles/styled-components/LightTheme";
import { getFont } from "../../styles/styled-components/mixins";
import { HotelsSearchFormList } from "./SearchForm/HotelsSearch/HotelsSearchFormList";
import { MobileStores } from "./MobilesStores/MobileStores";

const title = "Discover stays to live, work or just relax";

export function TopSection() {
  return (
    <TopSectionBlock className="top-section block container">
      <StyledTitle>{title}</StyledTitle>
      <HotelsSearchFormList />
      <MobileStores />
    </TopSectionBlock>
  );
}

export const TopSectionBlock = styled.div`
  @media ${LightTheme.media.md} {
    height: auto;
  }
`;

const StyledTitle = styled.h1`
  width: 542px;
  height: 118px;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  ${getFont("xxl", "medium", "xxl")};
  color: ${LightTheme.colors.generalWhite};

  @media ${LightTheme.media.lg} {
    width: 450px;
    ${getFont("xl", "medium", "xl")};
  }

  @media ${LightTheme.media.sm} {
    width: 250px;
    height: 50px;
    ${getFont("lg", "medium", "lg")};
  }
`;
