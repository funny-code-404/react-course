import { all } from "redux-saga/effects";
import { watchPopularHotelsSaga } from "../redux/popularHotels/sagas";
import { watchAvailableHotelsSaga } from "../redux/availableHotels/sagas";

export function* rootSaga() {
  yield all([watchPopularHotelsSaga(), watchAvailableHotelsSaga()]);
}
