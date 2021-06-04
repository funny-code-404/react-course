import {
  ACTION_GET_CIVILIZATIONS_REQUESTED,
  ACTION_GET_CIVILIZATIONS_FAILED,
  ACTION_GET_CIVILIZATIONS_SUCCEED,
} from '../actions'

describe('Action scivilizations', () => {
  describe('ACTION_GET_CIVILIZATIONS_REQUESTED', () => {
    it('should create action', () => {
      const url = 'Some url...'
      const expectedAction = {
        type: 'GET_CIVILIZATIONS_REQUESTED',
        payload: url,
      }

      expect(ACTION_GET_CIVILIZATIONS_REQUESTED(url)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_CIVILIZATIONS_FAILED', () => {
    it('should create action', () => {
      const error = 'Error'
      const expectedAction = {
        type: 'GET_CIVILIZATIONS_FAILED',
        payload: error,
      }

      expect(ACTION_GET_CIVILIZATIONS_FAILED(error)).toEqual(expectedAction)
    })
  })

  describe('ACTION_GET_CIVILIZATIONS_SUCCEED', () => {
    it('should create action', () => {
      const data = [{}]
      const expectedAction = {
        type: 'GET_CIVILIZATIONS_SUCCEED',
        payload: data,
      }

      expect(ACTION_GET_CIVILIZATIONS_SUCCEED(data)).toEqual(expectedAction)
    })
  })
})
