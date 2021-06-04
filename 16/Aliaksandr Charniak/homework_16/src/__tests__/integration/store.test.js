import { createStore } from 'redux'

import { rootReducer } from '../../store/rootReducer'
import {
  ACTION_GET_CIVILIZATIONS_SUCCEED,
  ACTION_GET_CIVILIZATIONS_FAILED,
  ACTION_GET_CIVILIZATIONS_REQUESTED,
} from '../../redux/civilizations/actions'
import {
  ACTION_GET_STRUCTURES_SUCCEED,
  ACTION_GET_STRUCTURES_FAILED,
  ACTION_GET_STRUCTURES_REQUESTED,
} from '../../redux/structures/actions'

import {
  ACTION_GET_TECHNOLOGIES_SUCCEED,
  ACTION_GET_TECHNOLOGIES_FAILED,
  ACTION_GET_TECHNOLOGIES_REQUESTED,
} from '../../redux/technologies/actions'

import {
  ACTION_GET_UNITS_SUCCEED,
  ACTION_GET_UNITS_FAILED,
  ACTION_GET_UNITS_REQUESTED,
} from '../../redux/units/actions'

describe('Redux store integration tests', () => {
  let store

  beforeEach(() => {
    store = createStore(rootReducer)
  })

  it('should add data to civilizations', () => {
    const data = [
      {
        name: 'aztecs',
        power: 100,
      },
    ]
    const action = ACTION_GET_CIVILIZATIONS_SUCCEED(data)

    store.dispatch(action)

    const civilizations = store.getState().civilizations.data
    const error = store.getState().civilizations.error
    const isFetching = store.getState().civilizations.isFetching

    expect(civilizations).toBeTruthy()
    expect(civilizations.name).toEqual(data.name)
    expect(civilizations.power).toEqual(data.power)
    expect(error).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should add error to civilizations', () => {
    const errorExpect = {
      message: 'Not found',
      status: 400,
    }

    const action = ACTION_GET_CIVILIZATIONS_FAILED(errorExpect)

    store.dispatch(action)

    const civilizations = store.getState().civilizations.data
    const error = store.getState().civilizations.error
    const isFetching = store.getState().civilizations.isFetching

    expect(error).toBeTruthy()
    expect(error.message).toEqual(errorExpect.message)
    expect(error.status).toEqual(errorExpect.status)
    expect(civilizations).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should isFetching in civilizations', () => {
    const action = ACTION_GET_CIVILIZATIONS_REQUESTED()

    store.dispatch(action)

    const civilizations = store.getState().civilizations.data
    const error = store.getState().civilizations.error
    const isFetching = store.getState().civilizations.isFetching

    expect(civilizations).toBeNull()
    expect(error).toBeNull()
    expect(isFetching).toBeTruthy()
  })

  it('should add data to structures', () => {
    const data = [
      {
        name: 'barack',
        wood: 100,
      },
    ]
    const action = ACTION_GET_STRUCTURES_SUCCEED(data)

    store.dispatch(action)

    const structures = store.getState().structures.data
    const error = store.getState().structures.error
    const isFetching = store.getState().structures.isFetching

    expect(structures).toBeTruthy()
    expect(structures.name).toEqual(data.name)
    expect(structures.power).toEqual(data.power)
    expect(error).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should add error to structures', () => {
    const errorExpect = {
      message: 'Not found',
      status: 400,
    }

    const action = ACTION_GET_STRUCTURES_FAILED(errorExpect)

    store.dispatch(action)

    const structures = store.getState().structures.data
    const error = store.getState().structures.error
    const isFetching = store.getState().structures.isFetching

    expect(error).toBeTruthy()
    expect(error.message).toEqual(errorExpect.message)
    expect(error.status).toEqual(errorExpect.status)
    expect(structures).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should isFetching in structures', () => {
    const action = ACTION_GET_STRUCTURES_REQUESTED()

    store.dispatch(action)

    const structures = store.getState().structures.data
    const error = store.getState().structures.error
    const isFetching = store.getState().structures.isFetching

    expect(structures).toBeNull()
    expect(error).toBeNull()
    expect(isFetching).toBeTruthy()
  })

  it('should add data to technologies', () => {
    const data = [
      {
        name: 'barack',
        wood: 100,
      },
    ]
    const action = ACTION_GET_TECHNOLOGIES_SUCCEED(data)

    store.dispatch(action)

    const technologies = store.getState().technologies.data
    const error = store.getState().technologies.error
    const isFetching = store.getState().technologies.isFetching

    expect(technologies).toBeTruthy()
    expect(technologies.name).toEqual(data.name)
    expect(technologies.power).toEqual(data.power)
    expect(error).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should add error to technologies', () => {
    const errorExpect = {
      message: 'Not found',
      status: 400,
    }

    const action = ACTION_GET_TECHNOLOGIES_FAILED(errorExpect)

    store.dispatch(action)

    const technologies = store.getState().technologies.data
    const error = store.getState().technologies.error
    const isFetching = store.getState().technologies.isFetching

    expect(error).toBeTruthy()
    expect(error.message).toEqual(errorExpect.message)
    expect(error.status).toEqual(errorExpect.status)
    expect(technologies).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should isFetching in technologies', () => {
    const action = ACTION_GET_TECHNOLOGIES_REQUESTED()

    store.dispatch(action)

    const technologies = store.getState().technologies.data
    const error = store.getState().technologies.error
    const isFetching = store.getState().technologies.isFetching

    expect(technologies).toBeNull()
    expect(error).toBeNull()
    expect(isFetching).toBeTruthy()
  })

  it('should add data to units', () => {
    const data = [
      {
        name: 'barack',
        wood: 100,
      },
    ]
    const action = ACTION_GET_UNITS_SUCCEED(data)

    store.dispatch(action)

    const units = store.getState().units.data
    const error = store.getState().units.error
    const isFetching = store.getState().units.isFetching

    expect(units).toBeTruthy()
    expect(units.name).toEqual(data.name)
    expect(units.power).toEqual(data.power)
    expect(error).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should add error to units', () => {
    const errorExpect = {
      message: 'Not found',
      status: 400,
    }

    const action = ACTION_GET_UNITS_FAILED(errorExpect)

    store.dispatch(action)

    const units = store.getState().units.data
    const error = store.getState().units.error
    const isFetching = store.getState().units.isFetching

    expect(error).toBeTruthy()
    expect(error.message).toEqual(errorExpect.message)
    expect(error.status).toEqual(errorExpect.status)
    expect(units).toBeNull()
    expect(isFetching).toBeFalsy()
  })

  it('should isFetching in units', () => {
    const action = ACTION_GET_UNITS_REQUESTED()

    store.dispatch(action)

    const units = store.getState().units.data
    const error = store.getState().units.error
    const isFetching = store.getState().units.isFetching

    expect(units).toBeNull()
    expect(error).toBeNull()
    expect(isFetching).toBeTruthy()
  })
})
