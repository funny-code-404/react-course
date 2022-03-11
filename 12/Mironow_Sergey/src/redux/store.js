import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { reviewsSaga } from "../ducks/reviews/sagas";


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)

})

sagaMiddleware.run(reviewsSaga)