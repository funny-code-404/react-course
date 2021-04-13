import { all } from '@redux-saga/core/effects';
import { watchGetData } from '../../ducks/fetchDataReducer/sagas';
import rootSaga from '../rootSaga';


describe('rootSaga test', () => {
    const genObject = rootSaga();
    
    it('should run different tusks in parallel', () => {
        expect(genObject.next().value).toEqual(all([watchGetData()]));
    });

});