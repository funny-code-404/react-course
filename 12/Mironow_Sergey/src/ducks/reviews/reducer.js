import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    loading: false,
    error: null,

}

export const ACTION_REQUEST_REVIEWS = createAction('REQUEST_REVIEWS')
export const ACTION_WRITE_REVIEWS = createAction('WRITE_REVIWS')
export const ACTION_REQUEST_FAILED = createAction('REQUEST_FAILED')

export const ACTION_SEND_REVIEW = createAction('SEND_REVIEW')
export const ACTION_DELETE_REVIEW = createAction('DELETE_REVIEW')

export const reviewsReducer = createReducer(initialState, {
    [ACTION_REQUEST_REVIEWS]: (state, action) => {
        state.loading = true
    },
    [ACTION_WRITE_REVIEWS]: (state, action) => {
        state.loading = false
        state.error = null
        state.data = action.payload
    },
    [ACTION_REQUEST_FAILED]: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    [ACTION_SEND_REVIEW]: (state, action) => {
        
    },
    [ACTION_DELETE_REVIEW]: (state, action) => {

    }

})