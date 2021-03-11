import { ACTION_CHANGE_PAGE, CHANGE_PAGE } from '../paginationsReducer';

describe('Pagination actions', () => {
    describe('CHANGE_PAGE', () => {
        it('should create an action to change page', () => {
            const mockedPageNumber = 2;
            const expectedAction = {
                type: CHANGE_PAGE,
                pageNumber: mockedPageNumber,
                offset: (mockedPageNumber - 1) * 10
            };
            expect(ACTION_CHANGE_PAGE(mockedPageNumber)).toEqual(expectedAction);
        });
    });
});