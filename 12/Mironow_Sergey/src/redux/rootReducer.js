import { combineReducers } from "redux";
import { reviewsReducer } from "../ducks/reviews/reducer";



export const rootReducer = combineReducers({
    reviews: reviewsReducer
})