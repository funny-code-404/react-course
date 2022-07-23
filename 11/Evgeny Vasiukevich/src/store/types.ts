import { AnyAction, Dispatch, Middleware } from "redux";
import { SagaMiddleware } from "redux-saga";
import { THotelsState } from "../redux/hotels/types";
import { TSearchBarState } from "../redux/searchBar/types";
import { TThemeState } from "../redux/theme/reducer";

export type TInitialState = {
    searchBar: TSearchBarState,
    hotels: THotelsState,
    theme: TThemeState,
};

export type TEnhancers = [SagaMiddleware<object>, Middleware<{}, any, Dispatch<AnyAction>>]
