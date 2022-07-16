import { createAction } from "redux-actions";
import { ThemeEnum } from "../../interfaces/styled";

export const actionSwitchLightTheme = createAction(ThemeEnum.LIGHT);
export const actionSwitchDarkTheme = createAction(ThemeEnum.DARK);