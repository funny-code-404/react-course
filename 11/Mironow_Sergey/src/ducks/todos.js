import { initialState } from "../redux/initialState"

export const TASKS_REQUEST = 'TASKS_REQUEST'
export const TASKS_WRITE = 'TASKS_WRITE'
export const TASKS_REQUEST_FAILED = 'TASKS_REQUEST_FAILED'

export const ACTION_TASKS_REQUEST = (payload) => {
    return {
        type: TASKS_REQUEST,
        payload: payload,
    }
}

export const ACTION_TASKS_WRITE = (payload) => {
    return {
        type: TASKS_WRITE,
        payload: payload,
    }
}

export const ACTION_TASKS_REQUEST_FAILD = (payload) =>{
    return {
        type: TASKS_REQUEST_FAILED,
        payload: payload,
    }
}

export function todosReducer(state = initialState, action){
    switch(action.type){
        case TASKS_WRITE:
            return {
                ...state,
                data: [...action.payload]
            }
        default:
            return state
    } 
}