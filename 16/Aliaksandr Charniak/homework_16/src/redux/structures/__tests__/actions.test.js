import {
  ACTION_GET_STRUCTURES_REQUESTED,
  ACTION_GET_STRUCTURES_FAILED,
  ACTION_GET_STRUCTURES_SUCCEED,
} from '../actions'

describe('Action structures', () => {
  describe('ACTION_GET_STRUCTURES_REQUESTED', () => {
    it('should create action', () => {
      const url = 'Some url...'
      const expectedAction = {
        type: 'GET_STRUCTURES_REQUESTED',
        payload: url,
      }

      expect(ACTION_GET_STRUCTURES_REQUESTED(url)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_STRUCTURES_FAILED', () => {
    it('should create action', () => {
      const error = 'Error'
      const expectedAction = {
        type: 'GET_STRUCTURES_FAILED',
        payload: error,
      }

      expect(ACTION_GET_STRUCTURES_FAILED(error)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_STRUCTURES_SUCCEED', () => {
    it('should create action', () => {
      const data = [{}]
      const expectedAction = {
        type: 'GET_STRUCTURES_SUCCEED',
        payload: data,
      }

      expect(ACTION_GET_STRUCTURES_SUCCEED(data)).toEqual(expectedAction)
    })
  })
})
