import { createStore } from "redux";
import { initialState } from "./initialState";
import { reducer } from "./rootReducer";

const store = createStore(
  reducer,
  initialState as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;