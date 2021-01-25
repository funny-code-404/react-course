import { combineReducers } from 'redux';
import { dogs } from '../ducks/dogs';

const reducer = {
    dogs,
}

export default combineReducers({ ...reducer });