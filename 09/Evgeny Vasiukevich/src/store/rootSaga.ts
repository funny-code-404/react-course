import { all } from "redux-saga/effects";
import { availableHotelsWatcher, popularHotelsWatcher } from "../redux/hotels/sagas";

export function* rootSaga() {
    yield all([availableHotelsWatcher(), popularHotelsWatcher()]);
};