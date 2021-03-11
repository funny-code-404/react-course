import { createStore } from 'redux';

import { rootReducer } from '../../redux/rootReducer';
import { ACTION_CHANGE_PAGE } from '../../ducks/paginationsReducer/paginationsReducer';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';

describe('Redux store integration tests', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer);
    });

    describe('ACTION_CHANGE_PAGE', () => {
        it('Should change page number correctly', () => {
            const mockedPageNumber = 3;

            store.dispatch(ACTION_CHANGE_PAGE(mockedPageNumber));

            const pageNumber = store.getState().paginations.pageNumber;

            expect(mockedPageNumber).toBe(pageNumber);
        });
    });

    describe('ACTION_GET_DATA_REQUESTED', () => {
        it('Should change fetching to true', () => {
            const mockedPath = 'Mocked Path';

            store.dispatch(ACTION_GET_DATA_REQUESTED(mockedPath));

            const fetching = store.getState().ageOfEmpires.isFetching;

            expect(true).toBe(fetching);
        });
    });

});