import {Data} from "../../components/homes/homes";
import {requestData, requestDataSucceed, requestDataFailed, inputValue} from "./actions";

export type HotelsStateType = {
    hotelsData: Data[] | null;
    error: null | Error,
    isLoading: boolean,
    inputValue: string,
}

export const initialHotelsState: HotelsStateType = {
    hotelsData: null,
    error: null,
    isLoading: false,
    inputValue: "",
};

type ActionType = {
    type: string,
    payload?: any,
}

export const hotelsReducer = (state = initialHotelsState, action: ActionType) => {
    switch (action.type) {
        case  requestData:
            return {
                ...state,
                isLoading: true,
            };
        case  requestDataSucceed:
            return {
                ...state,
                hotelsData: action.payload,
                isLoading: false,
            };
        case  requestDataFailed:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case  inputValue:
            return {
                ...state,
                inputValue: action.payload,
            };
        default:
            return state;
    }
}