import { css } from "styled-components";
import { TSearchBarState } from "../redux/searchBar/types";

// Function to get a fonts fragment
type TFonts = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function getFontsFragment(size: TFonts) {
    return css`
        font-size: ${({ theme }) => theme.fontSizes[`${size}`]};
        line-height: ${({ theme }) => theme.lineHeights[`${size}`]};
    `
};

// Function to get a previous month
export const getPreviousMonth = (date: Date): Date => {
    const previousMonth = new Date(date.getTime());

    previousMonth.setMonth(date.getMonth() - 1);
    return previousMonth;
};

// Function to get window dimensions
export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
};

// Function to get a string with a capital letter
export function getCapitalLetter(str: string) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// Function to get a comparison for counter
export function getComparisonCounter(category: 'adults' | 'children' | 'rooms', route: 'increase' | 'decrease', count: number | string[]) {
    const condition = {
        increase: {
            adults: count < 30,
            children: Array.isArray(count) && count.length < 10,
            rooms: count < 30,
        },
        decrease: {
            adults: count > 0,
            children: Array.isArray(count) && count.length > 0,
            rooms: count > 1,
        }
    }

    return condition[route][category];
};

// Function for build object for requests params
export function convertToParamsObject({ search, dateRange, counter: { properties } }: TSearchBarState) {
    const childrenToString = properties.children.join();

    return {
        search: search,
        dateFrom: dateRange.dateFrom,
        dateTo: dateRange.dateTo,
        adults: properties.adults,
        children: childrenToString,
        rooms: properties.rooms,
    }
};