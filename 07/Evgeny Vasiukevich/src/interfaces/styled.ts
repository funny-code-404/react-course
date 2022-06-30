export interface ITheme {
    colors: {
        generalBlue: string,
        generalWhite: string,
        acceptBlue: string,
        acceptYellow: string,
        darkMode1: string,
        darkMode2: string,
        darkMode3: string,
        strokeColor: string,
        textColor: string,
        secondaryText: string,
        bgColor: string,
    }

    fonts: {
        generalFont: string,
    }

    fontSizes: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string,
    }

    lineHeights: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string,
    }

    fontWeights: {
        regular: number,
        medium: number,
    }

    media: {
        extraLarge: string,
        large: string,
        medium: string, 
        small: string,
    }
}