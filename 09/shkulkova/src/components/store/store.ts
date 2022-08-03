import { applyMiddleware, createStore } from "redux";
import { SearchState } from "../redux/headerSerchSection/types";
import { initialState } from "./initialState";
import { reducer } from "./rootReducer";
import { StateHotelsType } from '../redux/availableHotels/reducer';
import { initialSearchSectionState } from "../redux/headerSerchSection/reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

export type TypeiInitialState = {
  searchSection: SearchState;
  hotels: StateHotelsType;
};

const sagaMiddleware = createSagaMiddleware()

const enhancers = [sagaMiddleware]

const store = createStore(reducer, initialState as any, composeWithDevTools(applyMiddleware(...enhancers)));

sagaMiddleware.run(rootSaga)

export default store;


