import { initialHotelsState } from "../redux/Hotels/reducer";
import { initialSearchCounterState } from "../redux/searchCounter/reducer";

export const initialState = {
    ...initialSearchCounterState,
    ...initialHotelsState,
};