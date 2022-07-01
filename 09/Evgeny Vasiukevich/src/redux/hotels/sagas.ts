import { call, put, takeLatest } from 'redux-saga/effects';
import ApiService from '../../API/ApiService';
import store from '../../store/store';
import { convertToParamsObject } from '../../utils/utils';
import
    {
        actionGetAvailableHotelsFailed, actionGetAvailableHotelsSucceed,
        actionGetPopularHotelsFailed,
        actionGetPopularHotelsSucceed,
        HotelsTypesActions
    } from './actions';
import { TResponse } from './types';

function* availableHotelsWorker() {
    const { searchBar } = store.getState();

    try {
        const response: TResponse = yield ApiService.getAvailableHotels(convertToParamsObject(searchBar));        
        yield put(actionGetAvailableHotelsSucceed(response.data));
    } catch (error: any) {
        yield put(actionGetAvailableHotelsFailed(error));
    }
};

function* popularHotelsWorker() {    
    try {
        const response: TResponse = yield ApiService.getPopularHotels();
        yield console.log(response);
        
        yield put(actionGetPopularHotelsSucceed(response.data));
    } catch (error: any) {
        yield put(actionGetPopularHotelsFailed(error));
    }
};

export function* availableHotelsWatcher() {
    yield takeLatest(HotelsTypesActions.REQUEST_AVAILABLE_HOTELS, availableHotelsWorker);
};

export function* popularHotelsWatcher() {
    yield takeLatest(HotelsTypesActions.REQUEST_POPULAR_HOTELS, popularHotelsWorker);
}