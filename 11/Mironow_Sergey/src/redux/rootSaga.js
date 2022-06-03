import { all} from "redux-saga/effects"
import { postsSaga, tasksSaga } from "../ducks/sagas"

export function* rootSaga(){
    yield all([postsSaga(), tasksSaga()])
}