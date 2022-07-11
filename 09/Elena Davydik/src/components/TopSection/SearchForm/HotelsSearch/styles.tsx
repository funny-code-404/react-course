import styled from "styled-components";
import { LightTheme } from "../../../../styles/styled-components/LightTheme";
import { getFont } from "../../../../styles/styled-components/mixins";

export const SearchForm = styled.div`
  &.searchForm {
    display: flex;
    flex-direction: column;

    & .searchForm__upTitles-container {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;

      @media ${LightTheme.media.md} {
        display: none;
      }
    }

    & .searchForm__destination-title {
      margin-left: 24px;
      ${getFont("sm", "regular", "sm")};
      color: ${LightTheme.colors.generalWhite};
    }

    & .searchForm__check-in-title {
      width: 739px;
      margin-left: 24px;
      ${getFont("sm", "regular", "sm")};
      color: ${LightTheme.colors.generalWhite};
    }

    & .searchForm__container {
      max-width: 1232px;
      width: 100%;
      height: 64px;
      margin-bottom: 64px;

      display: flex;
      flex-direction: row;
      align-items: center;

      ${getFont("sm", "regular", "sm")};
      color: ${LightTheme.colors.mainText};

      background-color: ${LightTheme.colors.generalWhite};
      border: 3px solid ${LightTheme.colors.mainStroke};
      border-radius: 8px;

      @media ${LightTheme.media.sm} {
        height: 42px;
      }
    }

    .searchForm__input {
      max-width: 475px;
      width: 100%;
      height: 64px;
      padding: 0 24px;

      ${getFont("sm", "regular", "sm")};
      color: $main-text-color;

      border: none;
      border-radius: 8px;

      @media ${LightTheme.media.sm} {
        height: 42px;
        padding: 8px 16px;
      }
    }

    & .searchForm__list {
      background: ${LightTheme.colors.generalWhite};
    }
  }
`;
