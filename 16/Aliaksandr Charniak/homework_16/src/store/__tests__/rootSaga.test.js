import { all } from '@redux-saga/core/effects'
import civilizationsSaga from '../../redux/civilizations/sagas'
import structuresSaga from '../../redux/structures/sagas'
import technologiesSaga from '../../redux/technologies/sagas'
import unitsSaga from '../../redux/units/sagas'
import rootSaga from '../rootSaga'

describe('rootSaga test', () => {
  const genObject = rootSaga()

  it('should run different tasks in parallel', () => {
    expect(genObject.next().value).toEqual(
      all([civilizationsSaga(), unitsSaga(), structuresSaga(), technologiesSaga()])
    )
  })
})
