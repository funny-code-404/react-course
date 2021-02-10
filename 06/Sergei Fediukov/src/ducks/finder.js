
// ACTIONS
export const FIND_DATA = 'FIND_DATA';

// ACTION CREATORS/MIDDLEWARES
export const findData = (find_request) => (dispatch, getState) => {

    const find_data = getState().cars.data.filter((obj) => {
        let flag = false;
        Object.values(obj).forEach((val) => {
            if ((String(val).indexOf(find_request) > -1) && (String(val).indexOf('http') === -1)) {
                flag = true;
                return;
            }
        });
        Object.keys(obj).forEach((val) => {
            if ((String(val).indexOf(find_request) > -1)) {
                flag = true;
                return;
            }
        });
        if (flag) return obj;
    });
    dispatch({
        type: FIND_DATA,
        payload: find_data,
    });
}

// INITIAL STATE
export const initialFindState = {
    find_data: [],
    find_flag: false
}

// REDUCER
export const FindReducer = (state = initialFindState, action) => {
    switch (action.type) {
        case FIND_DATA:
            return {
                ...state,
                find_data: action.payload,
                find_flag: true
            }
        default:
            return {
                ...state,
            }
    }
}
