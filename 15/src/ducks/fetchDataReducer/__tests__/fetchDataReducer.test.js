import { fetchDataReducer } from '../fetchDataReducer';
import * as types from '../types';

describe('fetch Data reducer', () => {

  it('should return the initial state', () => {
    const expectedInitialState = {
      fetchedData: { 
        civilizations: [],
        structures: [],
        technologies: [],
        units: [],
      },
      addData: [],
      isFetching: false,
      error: null,
    };

    expect(fetchDataReducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle GET_DATA_REQUESTED', () => {
    expect(
      fetchDataReducer(undefined, {
        type: types.GET_DATA_REQUESTED,
      })
    ).toEqual({
        fetchedData: { 
          civilizations: [],
          structures: [],
          technologies: [],
          units: [],
        },
        addData: [],
        isFetching: true,
        error: null,
    });
  });

  it('should handle and save data from GET_DATA_SUCCEEDED', () => {
    const data = { test: 'important Data'};
    expect(
      fetchDataReducer(undefined, {
        type: types.GET_DATA_SUCCEEDED,
        data
      })
    ).toEqual({
        fetchedData: { 
          test: 'important Data',
          civilizations: [],
          structures: [],
          technologies: [],
          units: []
        },
        addData: [],
        isFetching: false,
        error: null,
    });
  });

  it('should handle GET_DATA_FAILED', () => {
    const error = { danger: 'important Error' };
    expect(
      fetchDataReducer(undefined, {
        type: types.GET_DATA_FAILED,
        payload: error
      })
    ).toEqual({
        fetchedData: { 
          civilizations: [],
          structures: [],
          technologies: [],
          units: []
        },
        addData: [],
        isFetching: false,
        error: { danger: 'important Error' },
    });
  });

  it('should handle GET_ADD_DATA_REQUESTED', () => {
    expect(
      fetchDataReducer(undefined, {
        type: types.GET_ADD_DATA_REQUESTED,
      })
    ).toEqual({
        fetchedData: { 
          civilizations: [],
          structures: [],
          technologies: [],
          units: [],
        },
        addData: [],
        isFetching: true,
        error: null,
    });
  });

  it('should handle and save data from GET_ADD_DATA_SUCCEEDED', () => {
    const data = { test: 'important Data'};
    expect(
      fetchDataReducer(undefined, {
        type: types.GET_ADD_DATA_SUCCEEDED,
        data
      })
    ).toEqual({
        fetchedData: { 
          civilizations: [],
          structures: [],
          technologies: [],
          units: []
        },
        addData: [{ test: 'important Data'}],
        isFetching: false,
        error: null,
    });
  });

  it('should handle CLEAR_ADD_DATA', () => {
    const data = { test: 'important Data'};
    expect(
      fetchDataReducer({
        addData: data
      }, 
      {
        type: types.CLEAR_ADD_DATA,
      })
    ).toEqual({
        addData: []
    });
  });

});