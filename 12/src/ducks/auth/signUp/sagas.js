import { call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../../../firebase";

import { GET_SIGN_UP_REQUESTED, userActionFailed, userActionSucceded } from "../actions";

function* getSignUp({ email, password }) {
	try {
		const {user} = yield call([auth, auth.createUserWithEmailAndPassword],email, password)
		yield put(userActionSucceded(user))
	} catch (error) {
		yield put(userActionFailed(error))
	}
}

function* signUpSaga() {
	yield takeLatest(GET_SIGN_UP_REQUESTED, getSignUp)
}

export default signUpSaga;