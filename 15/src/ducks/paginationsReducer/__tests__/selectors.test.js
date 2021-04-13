import { 
    pageNumberSelector, 
    offsetSelector, 
    pageLimitSelector 
} from '../paginationsReducer';

describe('Pagination Reducer Selectors', () => {
    let mockedStore;
    beforeEach(() => {
        mockedStore = {
            paginations:{
                pageNumber: 100,
                offset: 2,
                pageLimit: 30
            }   
        };
    });

    it('pageNumberSelector should return page number from store', () => {
        expect(pageNumberSelector(mockedStore)).toBe(100);
    });

    it('offsetSelector should return offset from store', () => {
        expect(offsetSelector(mockedStore)).toBe(2);
    });

    it('pageLimitSelector should return page limit from store', () => {
        expect(pageLimitSelector(mockedStore)).toBe(30);
    });
});