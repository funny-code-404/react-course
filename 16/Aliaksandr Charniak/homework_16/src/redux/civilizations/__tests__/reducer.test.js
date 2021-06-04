import { civilizationsReducer } from '../reducer'

describe('Civilizations reducer unit-tests', () => {
  it('should return [] when initial state and action are undefined', () => {
    const initialCivilizationsState = {
      data: null,
      error: null,
      isFetching: false,
    }

    expect(civilizationsReducer(undefined, {})).toEqual(initialCivilizationsState)
  })

  it('should set isFetching flag when data requested', () => {
    const initialCivilizationsState = {
      data: null,
      error: null,
      isFetching: false,
    }

    const civilizationRequested = {
      type: 'GET_CIVILIZATIONS_REQUESTED',
    }

    expect(civilizationsReducer(initialCivilizationsState, civilizationRequested)).toEqual({
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

    const civilizationFailed = {
      type: 'GET_CIVILIZATIONS_FAILED',
      payload: { message: 'msg' },
    }

    expect(civilizationsReducer(initialState, civilizationFailed)).toEqual({
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

    const civilizationData = {
      type: 'GET_CIVILIZATIONS_SUCCEED',
      payload: [
        {
          civilization: {
            name: 'Orcs',
          },
        },
      ],
    }

    expect(civilizationsReducer(initialState, civilizationData)).toEqual({
      data: [
        {
          civilization: {
            name: 'Orcs',
          },
        },
      ],
      isFetching: false,
      error: null,
    })
  })
})
