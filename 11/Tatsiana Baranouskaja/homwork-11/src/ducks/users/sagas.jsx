import { takeLatest, call, put } from "redux-saga/effects";
import { GET_USERS_DATA_REQUESTED, ACTION_GET_USERS_DATA_SUCCEED, ACTION_GET_USERS_DATA_FAILED } from "./actions";
import { API } from "../../api/index";

export function* getUsersDataSaga(action) {
    console.log('SAGA');
    
    try {

        const data = yield call(API.userApi.getUsers, action.payload);
    //    console.log(data);

        yield put(ACTION_GET_USERS_DATA_SUCCEED(data));

    } catch (e) {
        yield put(ACTION_GET_USERS_DATA_FAILED(e));
    }
}


export function* usersSaga() {
    console.log('WATCH userSaga');
    yield takeLatest(GET_USERS_DATA_REQUESTED, getUsersDataSaga);
}