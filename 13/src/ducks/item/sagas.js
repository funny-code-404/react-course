import { takeLatest, call, put } from "redux-saga/effects";

import { getItemData } from "../../services/api/item";
import { 
	GET_DATA_ITEM_REQUESTED,
	getDataItemSucceded,
	getDataItemFailed,
 } from "./actions";

function* getItemSaga ({ path }) {
	try {
		const result = yield call(getItemData, path)
		yield put(getDataItemSucceded(result))
	} catch (error) {
		yield put(getDataItemFailed(error))
	}
}

function* itemSaga () {
	yield takeLatest(GET_DATA_ITEM_REQUESTED , getItemSaga)
}

export default itemSaga;