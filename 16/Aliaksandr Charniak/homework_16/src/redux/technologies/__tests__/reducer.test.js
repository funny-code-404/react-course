import { technologiesReducer } from '../reducer'

describe('Technologies reducer unit-tests', () => {
  it('should return [] when initial state and action are undefined', () => {
    const initialTechnologiesState = {
      data: null,
      error: null,
      isFetching: false,
    }

    expect(technologiesReducer(undefined, {})).toEqual(initialTechnologiesState)
  })

  it('should set isFetching flag when data requested', () => {
    const initialTechnologiesState = {
      data: null,
      error: null,
      isFetching: false,
    }

    const technologiesRequested = {
      type: 'GET_TECHNOLOGIES_REQUESTED',
    }

    expect(technologiesReducer(initialTechnologiesState, technologiesRequested)).toEqual({
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

    const technologiesFailed = {
      type: 'GET_TECHNOLOGIES_FAILED',
      payload: { message: 'msg' },
    }

    expect(technologiesReducer(initialState, technologiesFailed)).toEqual({
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

    const technologiesData = {
      type: 'GET_TECHNOLOGIES_SUCCEED',
      payload: [
        {
          technologies: {
            name: 'Battle',
          },
        },
      ],
    }

    expect(technologiesReducer(initialState, technologiesData)).toEqual({
      data: [
        {
          technologies: {
            name: 'Battle',
          },
        },
      ],
      isFetching: false,
      error: null,
    })
  })
})
