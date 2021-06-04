import {
  ACTION_GET_UNITS_REQUESTED,
  ACTION_GET_UNITS_FAILED,
  ACTION_GET_UNITS_SUCCEED,
} from '../actions'

describe('Action units', () => {
  describe('ACTION_GET_UNITS_REQUESTED', () => {
    it('should create action', () => {
      const url = 'Some url...'
      const expectedAction = {
        type: 'GET_UNITS_REQUESTED',
        payload: url,
      }

      expect(ACTION_GET_UNITS_REQUESTED(url)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_UNITS_FAILED', () => {
    it('should create action', () => {
      const error = 'Error'
      const expectedAction = {
        type: 'GET_UNITS_FAILED',
        payload: error,
      }

      expect(ACTION_GET_UNITS_FAILED(error)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_UNITS_SUCCEED', () => {
    it('should create action', () => {
      const data = [{}]
      const expectedAction = {
        type: 'GET_UNITS_SUCCEED',
        payload: data,
      }

      expect(ACTION_GET_UNITS_SUCCEED(data)).toEqual(expectedAction)
    })
  })
})
