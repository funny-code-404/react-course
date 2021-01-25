// selectors

// actions

export const GET_DOGS = 'GET_DOGS';

// action creators
export const ACTION_GET_DOGS = payload => {

    return {
        type: GET_DOGS,
        payload,
    }
};

// middlewares

//initialState

const initialDogsState = {
    dogs: {},
};

// reducer
export const dogs = (state = initialDogsState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return {
            ...state,
            dogs: action.payload
        }
        default:
            return {...state}
    }
}

export default initialDogsState;