import { 
    GET_DATA_STRUCTURES_REQUSTED,
    GET_DATA_STRUCTURES_SUCCEDED,
    GET_DATA_STRUCTURES_FAILD
} from "./actions";

export const initialStructures = {
    data: null,
    isFetching: false,
    error: null,
}

export const structures = (state = initialStructures, action) => {
    switch (action.type) {
        case GET_DATA_STRUCTURES_REQUSTED:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case GET_DATA_STRUCTURES_SUCCEDED:
            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: null,
            }
        case GET_DATA_STRUCTURES_FAILD:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return{
                ...state
            }
    }
}