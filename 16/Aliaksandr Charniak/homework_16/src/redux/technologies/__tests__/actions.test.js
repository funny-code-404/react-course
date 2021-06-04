import {
  ACTION_GET_TECHNOLOGIES_REQUESTED,
  ACTION_GET_TECHNOLOGIES_FAILED,
  ACTION_GET_TECHNOLOGIES_SUCCEED,
} from '../actions'

describe('Action technologies', () => {
  describe('ACTION_GET_TECHNOLOGIES_REQUESTED', () => {
    it('should create action', () => {
      const url = 'Some url...'
      const expectedAction = {
        type: 'GET_TECHNOLOGIES_REQUESTED',
        payload: url,
      }

      expect(ACTION_GET_TECHNOLOGIES_REQUESTED(url)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_TECHNOLOGIES_FAILED', () => {
    it('should create action', () => {
      const error = 'Error'
      const expectedAction = {
        type: 'GET_TECHNOLOGIES_FAILED',
        payload: error,
      }

      expect(ACTION_GET_TECHNOLOGIES_FAILED(error)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_TECHNOLOGIES_SUCCEED', () => {
    it('should create action', () => {
      const data = [{}]
      const expectedAction = {
        type: 'GET_TECHNOLOGIES_SUCCEED',
        payload: data,
      }

      expect(ACTION_GET_TECHNOLOGIES_SUCCEED(data)).toEqual(expectedAction)
    })
  })
})
