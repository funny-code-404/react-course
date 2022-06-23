import styled from "styled-components";
import { baseTheme } from "../../styles/theme";
import { getFontsFragment } from "../../utils/utils";
const background = require('../../assets/backgrounds/bg-homepage.jpg')

export const StyledHeader = styled.header`
    width: 100%;
    height: 100vh;
    background: url(String(${background})) no-repeat center 100%;
`

export const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-bottom: 145px;
    font-weight: ${baseTheme.fontWeights.medium};
    font-size: 50px;
    line-height: 59px;
`