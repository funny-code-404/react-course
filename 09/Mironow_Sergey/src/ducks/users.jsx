import { v4 } from 'uuid'

export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER_OPEN = 'EDIT_USER_OPEN'
export const EDIT_USER_CLOSE = 'EDIT_USER_CLOSE'


export const ACTION_ADD_USER = (payload) => ({
    type: ADD_USER,
    payload: payload

})

export const ACTION_DELETE_USER = (payload) => ({
    type: DELETE_USER,
    payload: payload.users.filter((user) => payload.id !== user.id)

})

export const ACTION_EDIT_USER_OPEN = (payload) => ({
    type: EDIT_USER_OPEN,
    payload: payload.users.map((el) => {
        if(el.id === payload.user.id){
            return {...el, edited: !payload.user.edited}
        }
        return el
    })
})

export const ACTION_EDIT_USER_CLOSE = (payload) => ({
    type: EDIT_USER_CLOSE,
    payload: payload.users.map((el) => {
        if(el.id === payload.user.id){
            console.log('CLOSE')
            return {...el, edited: !payload.user.edited, ...payload.inputVs}
        }
        return el
    })
})

export const initialState = {
    users: [],

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        ...action.payload,
                        id: v4(),
                        edited: false
                    }
                    
                ]
            }
        case DELETE_USER:
            return {
                ...state,
                users: [
                    ...action.payload
                ],
            }
        case EDIT_USER_OPEN:
            return {
                ...state,
                users: [
                    ...action.payload
                ]
            }
            case EDIT_USER_CLOSE:
                return {
                    ...state,
                    users: [
                        ...action.payload
                    ]
                }
        default:
            return state
    }

}