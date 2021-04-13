import { call, takeEvery } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { 
    watchGetData, 
    getEmpiresDataSaga, 
    getEmpiresAddDataSaga 
} from '../sagas';
import { 
    GET_DATA_REQUESTED, 
    GET_ADD_DATA_REQUESTED, 
    GET_DATA_SUCCEEDED, 
    GET_ADD_DATA_SUCCEEDED, 
    GET_DATA_FAILED 
} from '../types';
import { getEmpiresData } from '../../../services/api/ageOfEmpires';

describe('watchGetData', () => {

    const genObject = watchGetData();

    it('should wait for every GET_DATA_REQUESTED and call getEmpiresDataSaga', () => {
        expect(genObject.next().value).toEqual(takeEvery(GET_DATA_REQUESTED, getEmpiresDataSaga));
    });

    it('should wait for every GET_ADD_DATA_REQUESTED and call getEmpiresAddDataSaga', () => {
        expect(genObject.next().value).toEqual(takeEvery(GET_ADD_DATA_REQUESTED, getEmpiresAddDataSaga));
    });

    it('should be done on the next iteration', () => {
        expect(genObject.next().done).toBeTruthy();
    });

});

describe('getEmpiresDataSaga', () => {
    const mockedPath = { path: 'secret path' };
    const mockedData = { data: 'Test data' };

    it('should call getEmpiresData and dispatch success action', () => {
        
        return expectSaga(getEmpiresDataSaga, mockedPath)
        .provide([
            [call(getEmpiresData, mockedPath.path), mockedData]
        ])
        .dispatch({ type: GET_DATA_REQUESTED, path: mockedPath })
        .put({
            type: GET_DATA_SUCCEEDED,
            data: mockedData.data
        })
        
        .run();

    });

    it('should handle errors', () => {
        const error = new Error('error');
       
        return expectSaga(getEmpiresDataSaga, mockedPath)
          .provide([
            [call(getEmpiresData, mockedPath.path), throwError(error)],
          ])
          .dispatch({ type: GET_DATA_REQUESTED, path: mockedPath })
          .put({ type: GET_DATA_FAILED, payload: error })
          
          .run();
      });
});

describe('getEmpiresAddDataSaga', () => {
    const mockedPath = { path: 'secret path' };
    const mockedData = { data: 'Test data' };

    it('should call getEmpiresAddData and dispatch success action', () => {
        
        return expectSaga(getEmpiresAddDataSaga, mockedPath)
        .provide([
            [call(getEmpiresData, mockedPath.path), mockedData]
        ])
        .dispatch({ type: GET_ADD_DATA_REQUESTED, path: mockedPath })
        .put({
            type: GET_ADD_DATA_SUCCEEDED,
            data: mockedData.data
        })
        
        .run();

    });

    it('should handle errors', () => {
        const error = new Error('error');
       
        return expectSaga(getEmpiresAddDataSaga, mockedPath)
          .provide([
            [call(getEmpiresData, mockedPath.path), throwError(error)],
          ])
          .dispatch({ type: GET_ADD_DATA_REQUESTED, path: mockedPath })
          .put({ type: GET_DATA_FAILED, payload: error })
          
          .run();
      });
});