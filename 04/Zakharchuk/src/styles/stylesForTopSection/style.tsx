import styled from 'styled-components';
import HeaderBackground from "../../assets/images/header_bg.png"
import { GeneralWhite } from '../variables/style';
import { FontSizeXXL } from '../variables/style';
import { FontSizeMD } from '../variables/style';
import { FontWeightsRegular } from '../variables/style';
import { FontWeightsMedium } from '../variables/style';

export const HeaderSection = styled.div`
    width: 1440px;
    height: 900px;
    padding-top: 51px;
    background-image: url(${HeaderBackground});
    background-repeat: no-repeat;
`;

export const TitleTopSection = styled.h2`
  width: 542px;
  height: 118px;
  margin-left: 104px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${ FontSizeXXL };
  font-weight: ${ FontWeightsMedium };
  color:${ GeneralWhite };
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 640px;
  height: 25px;  
  margin: 100px 672px 24px 124px;
`;

export const SubtitleInputSearch = styled.h4`
    width: 246px;
    height: 21px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${ FontSizeMD };
    font-weight: ${ FontWeightsRegular };
    color: ${ GeneralWhite };
`;

export const SubtitleInputData = styled.h4`
    width: 183px;
    height: 21px;
    margin-left: 210px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${ FontSizeMD };
    font-weight: ${ FontWeightsRegular };
    color: ${ GeneralWhite };
`;