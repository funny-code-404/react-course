// ACTIONS
export const SHOW_MAKE_COLUMN = 'SHOW_MAKE_COLUMN';
export const SHOW_MODEL_COLUMN = 'SHOW_MODEL_COLUMN';
export const SHOW_YEAR_COLUMN = 'SHOW_YEAR_COLUMN';
export const SHOW_POWER_COLUMN = 'SHOW_POWER_COLUMN';
export const SHOW_PRICE_COLUMN = 'SHOW_PRICE_COLUMN';

export const HIDE_MAKE_COLUMN = 'HIDE_MAKE_COLUMN';
export const HIDE_MODEL_COLUMN = 'HIDE_MODEL_COLUMN';
export const HIDE_YEAR_COLUMN = 'HIDE_YEAR_COLUMN';
export const HIDE_POWER_COLUMN = 'HIDE_POWER_COLUMN';
export const HIDE_PRICE_COLUMN = 'HIDE_PRICE_COLUMN';

// ACTION CREATORS/MIDDLEWARES
export const showMakeColumn = () => (dispatch) => {
    dispatch({
        type: SHOW_MAKE_COLUMN,
    });
}
export const showModelColumn = () => (dispatch) => {
    dispatch({
        type: SHOW_MODEL_COLUMN,
    });
}
export const showYearColumn = () => (dispatch) => {
    dispatch({
        type: SHOW_YEAR_COLUMN,
    });
}
export const showPowerColumn = () => (dispatch) => {
    dispatch({
        type: SHOW_POWER_COLUMN,
    });
}
export const showPriceColumn = () => (dispatch) => {
    dispatch({
        type: SHOW_PRICE_COLUMN,
    });
}
export const hideMakeColumn = () => (dispatch) => {
    dispatch({
        type: HIDE_MAKE_COLUMN,
    });
}
export const hideModelColumn = () => (dispatch) => {
    dispatch({
        type: HIDE_MODEL_COLUMN,
    });
}
export const hideYearColumn = () => (dispatch) => {
    dispatch({
        type: HIDE_YEAR_COLUMN,
    });
}
export const hidePowerColumn = () => (dispatch) => {
    dispatch({
        type: HIDE_POWER_COLUMN,
    });
}
export const hidePriceColumn = () => (dispatch) => {
    dispatch({
        type: HIDE_PRICE_COLUMN,
    });
}

// INITIAL STATE
export const initialCheckBoxesState = {
    make: true,
    model: true,
    year: true,
    power: true,
    price: true,
}

// REDUCER
export const CheckBoxesReducer = (state = [], action) => {
    switch (action.type) {
        case HIDE_MAKE_COLUMN:
            return {
                ...state,
                make: false
            }
        case HIDE_MODEL_COLUMN:
            return {
                ...state,
                model: false
            }
        case HIDE_YEAR_COLUMN:
            return {
                ...state,
                year: false
            }
        case HIDE_POWER_COLUMN:
            return {
                ...state,
                power: false
            }
        case HIDE_PRICE_COLUMN:
            return {
                ...state,
                price: false
            }
        case SHOW_MAKE_COLUMN:
            return {
                ...state,
                make: true
            }
        case SHOW_MODEL_COLUMN:
            return {
                ...state,
                model: true
            }
        case SHOW_YEAR_COLUMN:
            return {
                ...state,
                year: true
            }
        case SHOW_POWER_COLUMN:
            return {
                ...state,
                power: true
            }
        case SHOW_PRICE_COLUMN:
            return {
                ...state,
                price: true
            }
        default:
            return {
                ...state,
            }
    }
}
