import { baseTheme } from "../styles/theme";

// Function to get a fonts fragment
type TFonts = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function getFontsFragment(size: TFonts) {
    return `
        font-size: ${baseTheme.fontSizes[`${size}`]};
        line-height: ${baseTheme.lineHeights[`${size}`]};
    `
};

// Function for media queries
export function mediaMax(screen: string, content: string): string {
    return `@media (max-width: ${screen}) {
        ${content}
    }`
};

// Function to get a previous month
export const getPreviousMonth = (date: Date): Date => {
    const previousMonth = new Date(date.getTime());

    previousMonth.setMonth(date.getMonth() - 1);
    return previousMonth;
};