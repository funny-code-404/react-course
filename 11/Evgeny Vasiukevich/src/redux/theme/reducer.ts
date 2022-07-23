import { ThemeEnum } from "../../interfaces/styled";

export type TThemeState = { theme: ThemeEnum };

type TThemeActions = {
    type: ThemeEnum,
    theme: ThemeEnum,
};

export const initialThemeState = {
    theme: ThemeEnum.LIGHT,
};

export const themeReducer = (
    state: TThemeState = initialThemeState,
    action: TThemeActions
) => {
    switch (action.type) {
        case ThemeEnum.DARK:
            return { ...state, theme: ThemeEnum.DARK };
        case ThemeEnum.LIGHT:
            return { ...state, theme: ThemeEnum.LIGHT };
        default:
            return state;
    }
}