import { structuresReducer } from '../reducer'

describe('Structures reducer unit-tests', () => {
  it('should return [] when initial state and action are undefined', () => {
    const initialStructuresState = {
      data: null,
      error: null,
      isFetching: false,
    }

    expect(structuresReducer(undefined, {})).toEqual(initialStructuresState)
  })

  it('should set isFetching flag when data requested', () => {
    const initialStructuresState = {
      data: null,
      error: null,
      isFetching: false,
    }

    const structuresRequested = {
      type: 'GET_STRUCTURES_REQUESTED',
    }

    expect(structuresReducer(initialStructuresState, structuresRequested)).toEqual({
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

    const structuresFailed = {
      type: 'GET_STRUCTURES_FAILED',
      payload: { message: 'msg' },
    }

    expect(structuresReducer(initialState, structuresFailed)).toEqual({
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

    const structuresData = {
      type: 'GET_STRUCTURES_SUCCEED',
      payload: [
        {
          structures: {
            name: 'Citadel',
          },
        },
      ],
    }

    expect(structuresReducer(initialState, structuresData)).toEqual({
      data: [
        {
          structures: {
            name: 'Citadel',
          },
        },
      ],
      isFetching: false,
      error: null,
    })
  })
})
