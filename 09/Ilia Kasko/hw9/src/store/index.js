import { createStore } from 'redux';

import { rootReducer } from './rootReducer';
import { initialState } from './intialState';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    initialState,
    devtoolsExtension
);

export default store;
