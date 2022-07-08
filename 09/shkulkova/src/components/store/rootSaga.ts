import { all } from "redux-saga/effects"
import { getAvailableHotelsWatcher } from "../redux/availableHotels/sagas";

export function* rootSaga() {
    yield all([getAvailableHotelsWatcher()]);

}