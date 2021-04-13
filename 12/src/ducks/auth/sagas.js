import { take, put, takeLatest, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { auth } from '../../firebase'

import { userActionSucceded, userActionFailed, SIGN_OUT_REQUESTED } from "./actions";

function* syncUserSaga() {
    const channel = eventChannel(emit => {
        const unsubscribe = auth.onAuthStateChanged(
            user => emit( {user} ),
            error => emit( {error} )
          );
        return unsubscribe;
    });
      const { user, error } = yield take(channel);
       if (user) yield put(userActionSucceded(user))
      else yield put(userActionFailed(error));

      yield takeLatest(SIGN_OUT_REQUESTED, function* () {
        yield call([auth , auth.signOut]);
        yield put(userActionSucceded(null));
    })
}

export default syncUserSaga;