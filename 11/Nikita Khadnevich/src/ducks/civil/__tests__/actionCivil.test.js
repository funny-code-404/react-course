
import  { ACTION_GET_CIVIL_Requested, ACTION_GET_CIVIL_Succeed, ACTION_GET_CIVIL_FAILED} from '../actions';

import  { GET_CIVIL_REQUESTED, GET_CIVIL_SUCCEED, GET_CIVIL_FAILED} from '../actions';

describe('ACTIONS', () => {
  
  describe('ACTION_GET_CIVIL_Requested', () => {

    it('should create action', () => {
      const url = 'url'
      const testBlock = {
          type: 'GET_CIVIL_REQUESTED',
          payload: url,
          isFetching: true
      };
    expect(ACTION_GET_CIVIL_Requested(testBlock.payload)).toEqual(testBlock)
    })

    it('should TYPE is truthy', () => {
      const testBlock = {
        type: 'GET_CIVIL_REQUESTED',
        payload: 'url',
        isFetching: true
      };
      expect(testBlock.type).toEqual(GET_CIVIL_REQUESTED)
    })

    it('should PAYLOAD include URL', () => {
      const payload = 'http://localhost:3000/';
      const testBlock = {
        type: 'GET_CIVIL_REQUESTED',
        payload,
        isFetching: true
      };
      expect(testBlock.payload).toMatch(/http:/)
    })

    it('should isFetching working', () => {
      const testBlock = {
        type: 'GET_CIVIL_REQUESTED',
        payload: 'url',
        isFetching: true
      };
      expect(testBlock.isFetching).toBeTruthy()
    })
  })
})




