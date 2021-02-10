import { createStore } from 'redux';

import reducer from './rootReducer';
import initialState from './initialState';

const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(
    reducer,
    initialState,
    devtoolsExtension()
);