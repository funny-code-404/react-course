import { TInitialState } from "../../store/types";

export const themeSelector = (state: TInitialState) => state.theme.theme;