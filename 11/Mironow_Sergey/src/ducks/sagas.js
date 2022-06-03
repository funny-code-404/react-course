import { takeLatest, call, put} from 'redux-saga/effects'
import { api } from '../api/api'
import { ACTION_POSTS_REQUEST_FAILED, ACTION_POSTS_REQUEST_SUCCEEDED, ACTION_POSTS_WRITE, POSTS_REQUEST } from './posts'
import { ACTION_TASKS_WRITE, TASKS_REQUEST, ACTION_TASKS_REQUEST_FAILD } from './todos'

export function* postsSaga(){
    yield takeLatest(POSTS_REQUEST, getPostsSaga)
}


function* getPostsSaga(action){
    try {
        const data = yield call(api.getData, 'https:jsonplaceholder.typicode.com/posts')
        yield put(ACTION_POSTS_WRITE(data))
        yield put(ACTION_POSTS_REQUEST_SUCCEEDED())
    }catch(err){
        yield put(ACTION_POSTS_REQUEST_FAILED(err))
    }
}

export function* tasksSaga(){
    yield takeLatest(TASKS_REQUEST, getTasksSaga)
}

function* getTasksSaga(action){
    try {
        const data = yield call(api.getData, 'https://jsonplaceholder.typicode.com/todos')
        yield put(ACTION_TASKS_WRITE(data))
    }catch(err){
        yield put(ACTION_TASKS_REQUEST_FAILD(err))
    }
}







