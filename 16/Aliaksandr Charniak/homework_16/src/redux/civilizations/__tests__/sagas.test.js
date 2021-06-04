import { call, takeLatest } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { throwError } from 'redux-saga-test-plan/providers'

import civilizationsSaga, { getCivilizationsSaga } from '../sagas'
import {
  GET_CIVILIZATIONS_REQUESTED,
  GET_CIVILIZATIONS_SUCCEED,
  GET_CIVILIZATIONS_FAILED,
} from '../actions'

import { URL } from '../../../constantes'

describe('civilizationsSaga', () => {
  const genObject = civilizationsSaga()

  it('should wait for every GET_CIVILIZATIONS_REQUESTED and call getCivilizationsSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(GET_CIVILIZATIONS_REQUESTED, getCivilizationsSaga)
    )
  })

  it('should be done on the next iteration', () => {
    expect(genObject.next().done).toBeTruthy()
  })
})

// describe('getCivilizationsSaga', () => {
//   const mockedAction = { type: 'ACTION_TYPE', payload: URL }
//   const mockedData = { data: 'mocked data' }

//   function* api() {
//     return { data: 'mocked data' }
//   }

//   it('should fetch and dispatch success action', () => {
//     return (
//       expectSaga(getCivilizationsSaga, mockedAction)
//         //.provide([[call(api), mockedData]])
//         //.dispatch({ type: GET_CIVILIZATIONS_REQUESTED, payload: mockedAction.payload })
//         .put({
//           type: GET_CIVILIZATIONS_SUCCEED,
//           data: mockedData.data,
//         })

//         .run()
//     )
//   })

//   it('should handle errors', () => {
//     const error = new Error('error')

//     return (
//       expectSaga(getCivilizationsSaga, mockedAction)
//         //.provide([[call(mockedAction.payload, mockedData), throwError(error)]])
//         .dispatch({ type: GET_CIVILIZATIONS_REQUESTED, payload: mockedAction.payload })
//         .put({ type: GET_CIVILIZATIONS_FAILED, payload: error })

//         .run()
//     )
//   })
// })
