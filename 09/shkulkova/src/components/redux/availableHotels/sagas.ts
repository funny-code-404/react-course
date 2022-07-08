import { put, takeLatest } from "redux-saga/effects";
import { Hotel } from "../../Main/HotelList/HotelList";
import Services from "../../service/Services";
import store from "../../store/store";
import { actionGetHotelsFailed, actionGetHotelsSucceed, REQUEST_AVAILABLE_HOTELS } from "./actions";

type TResponse = {
        data: Hotel[]
}

function* getAvailableHotelsWorker() {
const params = store.getState().searchSection;
try {
const response: TResponse = yield Services.getAvailableHotels(params);
yield put(actionGetHotelsSucceed(response.data))
} catch (error: any) {
yield put(actionGetHotelsFailed(error));
}
}

export function* getAvailableHotelsWatcher() {
    yield takeLatest(REQUEST_AVAILABLE_HOTELS, getAvailableHotelsWorker);
}