import { CHANGE_PAGE, paginationsReducer } from '../paginationsReducer';

describe('Paginations Reducer', () => {

    it('should return the initial state', () => {
        const expectedInitialState = {
            pageNumber: 1,
            offset: 0,
            pageLimit: 10
        };

        expect(paginationsReducer(undefined, {})).toEqual(expectedInitialState);
    });

    it('should handle CHANGE_PAGE', () => {
        const pageNumber = 2;
        expect(paginationsReducer(undefined, {
            type: CHANGE_PAGE,
            pageNumber,
            offset: (pageNumber - 1) * 10
        })).toEqual({
            pageNumber: 2,
            offset: 10,
            pageLimit: 10
        });
    });
});