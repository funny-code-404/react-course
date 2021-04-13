import * as actions from '../actions';
import * as types from '../types';


describe('fetchDataReducer actions', () => {

    describe('CLEAR_ADD_DATA', () => {
        it('should create an action to clear add data', () => {
            const expectedAction = {
                type: types.CLEAR_ADD_DATA,
            }
            expect(actions.ACTION_CLEAR_ADD_DATA).toEqual(expectedAction);
        });
    });
    
    describe('GET_DATA_REQUESTED', () => {
        it('should create an action to request data', () => {
            const mockedPath = 'Secret path';
            const expectedAction = {
                type: types.GET_DATA_REQUESTED,
                path: mockedPath
            };
            expect(actions.ACTION_GET_DATA_REQUESTED(mockedPath)).toEqual(expectedAction);
        });
    });
   
    describe('GET_DATA_SUCCEEDED', () => {
        it('should create an action to successfull data recieving', () => {
            const mockedData = { data: 'Test Data' }
            const expectedAction = {
                type: types.GET_DATA_SUCCEEDED,
                data: mockedData.data
            };
            expect(actions.ACTION_GET_DATA_SUCCEEDED(mockedData)).toEqual(expectedAction);
        });
    });
    
    describe('GET_ADD_DATA_REQUESTED', () => {});
    it('should create an action to request additional data', () => {
        const mockedPath = 'Secret additional path';
        const expectedAction = {
            type: types.GET_ADD_DATA_REQUESTED,
            path: mockedPath
        };
        expect(actions.ACTION_GET_ADD_DATA_REQUESTED(mockedPath)).toEqual(expectedAction);
    });

    describe('GET_ADD_DATA_SUCCEEDED', () => {
        it('should create an action to successfull recieving of additional data', () => {
            const mockedData = { data: 'Add Data' };
            const expectedAction = {
                type: types.GET_ADD_DATA_SUCCEEDED,
                data: mockedData.data
            };
            expect(actions.ACTION_GET_ADD_DATA_SUCCEEDED(mockedData)).toEqual(expectedAction);
        });
    });
    
    describe('GET_DATA_FAILED', () => {
        it('should create an action of failed data recieving', () => {
            const error = 'error';
            const expectedAction = {
                type: types.GET_DATA_FAILED,
                payload: error
            };
            expect(actions.ACTION_GET_DATA_FAILED(error)).toEqual(expectedAction);
        });
    });
});