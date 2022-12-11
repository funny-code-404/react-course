import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "../interfaces/styled";

export const lightTheme: DefaultTheme = {
    type: ThemeEnum.LIGHT,

    colors: {
        generalBlue: '#10367C',
        generalWhite: '#FFFFFF',
        acceptBlue: '#3077C6',
        acceptYellow: '#F5BD41',
        darkMode1: '#121212',
        darkMode2: '#1D1E1F',
        darkMode3: '#4D4D4D',
        strokeColor: '#F3F3F4',
        textColor: '#383838',
        titleColor: '#383838',
        secondaryText: '#BFBFBF',
        bgColor: '#EAF0F9',
        bgColor2: '#FFFFFF',
    },

    fonts: {
        generalFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },

    fontSizes: {
        xs: '12px',
        sm: '15px',
        md: '18px',
        lg: '24px',
        xl: '28px',
        xxl: '40px',
    },

    lineHeights: {
        xs: '14px',
        sm: '18px',
        md: '22px',
        lg: '28px',
        xl: '33px',
        xxl: '47px',
    },

    fontWeights: {
        regular: 400,
        medium: 500,
    },

    media: {
        extraLarge: '1200px',
        large: '992px',
        medium: '768px', 
        small: '576px',
    },
};

export const darkTheme: DefaultTheme = {
    type: ThemeEnum.DARK,

    colors: {
        generalBlue: '#FFFFFF',
        generalWhite: '#FFFFFF',
        acceptBlue: '#3077C6',
        acceptYellow: '#F5BD41',
        darkMode1: '#121212',
        darkMode2: '#1D1E1F',
        darkMode3: '#4D4D4D',
        strokeColor: '#F3F3F4',
        textColor: '#383838',
        titleColor: '#FFFFFF',
        secondaryText: '#BFBFBF',
        bgColor: '#3077C6',
        bgColor2: '#10367C',
    },

    fonts: {
        generalFont: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },

    fontSizes: {
        xs: '12px',
        sm: '15px',
        md: '18px',
        lg: '24px',
        xl: '28px',
        xxl: '40px',
    },

    lineHeights: {
        xs: '14px',
        sm: '18px',
        md: '22px',
        lg: '28px',
        xl: '33px',
        xxl: '47px',
    },

    fontWeights: {
        regular: 400,
        medium: 500,
    },

    media: {
        extraLarge: '1200px',
        large: '992px',
        medium: '768px', 
        small: '576px',
    },
};

// Original
// colors: {
//     generalBlue: '#10367C',
//     generalWhite: '#FFFFFF',
//     acceptBlue: '#3077C6',
//     acceptYellow: '#F5BD41',
//     darkMode1: '#121212',
//     darkMode2: '#1D1E1F',
//     darkMode3: '#4D4D4D',
//     strokeColor: '#F3F3F4',
//     textColor: '#383838',
//     secondaryText: '#BFBFBF',
//     bgColor: '#EAF0F9',
// },