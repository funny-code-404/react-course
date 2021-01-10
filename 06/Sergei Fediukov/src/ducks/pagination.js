import { FIND_DATA } from './finder'
// ACTIONS
export const LEFT_PAGE = 'LEFT_PAGE';
export const RIGHT_PAGE = 'RIGHT_PAGE ';

export const FIRST_PAGE = 'FIRST_PAGE';
export const LAST_PAGE = 'LAST_PAGE ';

// ACTION CREATORS/MIDDLEWARES
export const leftPage = () => (dispatch) => {
    dispatch({
        type: LEFT_PAGE,
    });
}
export const rightPage = () => (dispatch) => {
    dispatch({
        type: RIGHT_PAGE,
    });
}
export const firstPage = () => (dispatch) => {
    dispatch({
        type: FIRST_PAGE,
    });
}
export const lastPage = () => (dispatch, getState) => {
    let props = getState()
    let data = ''
    Boolean(props.find.find_data.length) ? data = props.find.find_data : data = props.cars.data
    const lastPage = Math.ceil(data.length / props.pagination.pageLimit)
    dispatch({
        type: LAST_PAGE,
        payload: lastPage

    });
}

// INITIAL STATE
export const initialPaginationState = {
    pageLimit: 10,
    currentPage: 1,
    indexOfFirst: 0,
    indexOfLast: 10,
}

// REDUCER
export const PaginationReducer = (state = [], action) => {
    switch (action.type) {
        case LEFT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
                indexOfLast: state.pageLimit * (state.currentPage - 1),
                indexOfFirst: state.indexOfLast - state.pageLimit * 2

            }
        case RIGHT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                indexOfLast: state.pageLimit * (state.currentPage + 1),
                indexOfFirst: state.currentPage * state.pageLimit
            }
        case FIRST_PAGE:
            return {
                ...initialPaginationState
            }
        case FIND_DATA:
            return {
                ...initialPaginationState
            }
        case LAST_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                indexOfLast: state.pageLimit * (action.payload),
                indexOfFirst: state.pageLimit * (action.payload - 1)
            }
        default:
            return {
                ...state,
            }
    }
}
