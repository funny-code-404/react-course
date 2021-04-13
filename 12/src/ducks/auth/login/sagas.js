import { call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../../../firebase";

import { userActionSucceded, userActionFailed, GET_LOGIN_REQUESTED } from "../actions";

function* getLogin({ email, password }) {
	try {
		const {user} = yield call([auth, auth.signInWithEmailAndPassword],email, password)
		yield put(userActionSucceded(user))
	} catch (error) {
		yield put(userActionFailed(error))
	}
}

function* LoginSaga() {
	yield takeLatest(GET_LOGIN_REQUESTED, getLogin)
}

export default LoginSaga;