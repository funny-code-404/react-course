import styled from "styled-components";
import { LightTheme } from "../../../../styles/styled-components/LightTheme";
import { getFont } from "../../../../styles/styled-components/mixins";

export const InputFilter = styled.div<{ isClick: boolean }>`
  border: ${(props) =>
    props.isClick ? "3px solid #F5BD41" : "2px solid #cecece"};
  width: 314px;
  height: 64px;
  margin-right: 3px;
  padding: 13px;
  position: relative;
  left: 6px;
  display: flex;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 8px;
  overflow: hidden;

  @media ${LightTheme.media.lg} {
    width: 270px;
  }
  @media ${LightTheme.media.md} {
    width: 230px;
  }
  @media ${LightTheme.media.sm} {
    width: 180px;
    height: 42px;
  }
  .inputFilter__text {
    max-width: 275px;
    width: 100%;

    ${getFont("sm", "regular", "sm")};
    color: ${LightTheme.colors.mainText};
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media ${LightTheme.media.md} {
      width: 200px;
    }
    @media ${LightTheme.media.sm} {
      width: 150px;
    }
  }
`;

export const FilterPopupItem = styled.div`
  max-width: 256px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item__title {
    ${getFont("xs", "regular", "xs")};
    color: ${LightTheme.colors.mainText};
  }

  .item__container {
    width: 118px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item__button {
    width: 30px;
    height: 30px;
    margin: 6px 0;

    ${getFont("sm", "regular", "sm")};
    color: ${LightTheme.colors.accentBlue};

    border: 1px solid ${LightTheme.colors.accentBlue};
    background: inherit;

    :hover {
      color: ${LightTheme.colors.generalWhite};
      background: ${LightTheme.colors.accentBlue};
    }
  }

  .item__subtitle {
    margin: 0 20px;
    ${getFont("xs", "regular", "xs")};
    color: ${LightTheme.colors.mainText};
  }
`;

export const FilterPopup = styled.div`
  max-width: 259px;
  width: 100%;
  height: auto;
  margin-top: 11px;
  padding: 22px;

  position: absolute;
  display: flex;
  flex-direction: column;

  background-color: ${LightTheme.colors.generalWhite};
  border-radius: 8px;
`;
