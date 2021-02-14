import { 
    GET_DATA_UNITS_REQUESTED,
    GET_DATA_UNITS_SUCCEDED,
    GET_DATA_UNITS_FAILED
} from "./actions";

export const initialStateUnits = {
    data: null,
    isFetching: false,
    error: null,
}

export const units = (state = initialStateUnits, action) => {
    switch (action.type) {
        case GET_DATA_UNITS_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case GET_DATA_UNITS_SUCCEDED:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }
        case GET_DATA_UNITS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return {
                ...state,
            }
    }
}