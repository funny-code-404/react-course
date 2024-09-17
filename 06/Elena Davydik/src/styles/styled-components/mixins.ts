import { LightTheme } from "./LightTheme";

type TFontSizes = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'mobileXs' | 'mobileSm' | 'mobileMd' | 'mobileLg';
type TFontWeight = 'regular' | 'medium' | 'bold';

export const getFont = (fontSize:TFontSizes, weight:TFontWeight, lineHeight:TFontSizes) => {
    return `
    font-size: ${LightTheme.fotnSizes[`${fontSize}`]};
    font-weight: ${LightTheme.fontWeight[`${weight}`]};
    line-height: ${LightTheme.fotnSizes[`${lineHeight}`]};
    `
}

type TFlex = {
    direction:string, 
    justify:string, 
    align:string, 
    wrap:string,
}

export const flex = ({direction, justify, align, wrap}:TFlex) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        flex-wrap: ${wrap};
    `
}