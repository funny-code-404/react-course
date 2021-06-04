import { unitsReducer } from '../reducer'

describe('Civilizations reducer unit-tests', () => {
  it('should return [] when initial state and action are undefined', () => {
    const initialUnitsState = {
      data: null,
      error: null,
      isFetching: false,
    }

    expect(unitsReducer(undefined, {})).toEqual(initialUnitsState)
  })

  it('should set isFetching flag when data requested', () => {
    const initialUnitsState = {
      data: null,
      error: null,
      isFetching: false,
    }

    const unitRequested = {
      type: 'GET_UNITS_REQUESTED',
    }

    expect(unitsReducer(initialUnitsState, unitRequested)).toEqual({
      data: null,
      error: null,
      isFetching: true,
    })
  })

  it('should set error', () => {
    const initialState = {
      data: null,
      error: null,
      isFetching: true,
    }

    const unitFailed = {
      type: 'GET_UNITS_FAILED',
      payload: { message: 'msg' },
    }

    expect(unitsReducer(initialState, unitFailed)).toEqual({
      data: null,
      error: { message: 'msg' },
      isFetching: false,
    })
  })

  it('should data set', () => {
    const initialState = {
      data: null,
      error: null,
      isFetching: true,
    }

    const unitData = {
      type: 'GET_UNITS_SUCCEED',
      payload: [
        {
          units: {
            name: 'Orcs',
          },
        },
      ],
    }

    expect(unitsReducer(initialState, unitData)).toEqual({
      data: [
        {
          units: {
            name: 'Orcs',
          },
        },
      ],
      isFetching: false,
      error: null,
    })
  })
})
