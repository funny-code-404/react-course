import { getData, getDetail, getCreatedIn, getUniqueTech, getUniqueUnit } from "../action";

describe('ACTIONS REDUX',() => {
    describe('GET_DATA',() => {
        it('should return correct actions',() => {
            const MOCKED_PATH = '/path';
            const MOCKED_ACTIONS = {
                type: 'GET_DATA',
                path: MOCKED_PATH
            }
            expect(getData(MOCKED_PATH)).toEqual(MOCKED_ACTIONS)
        })
    });
    
    describe('GET_DETAIL',() => {
        it('should return correct actions',() => {
            const MOCKED_PATH = '/path';
            const MOCKED_ACTIONS = {
                type: 'GET_DETAIL',
                path: MOCKED_PATH
            }
            expect(getDetail(MOCKED_PATH)).toEqual(MOCKED_ACTIONS)
        })
    });

    describe('GET_CREATEDIN',() => {
        it('should return correct actions',() => {
            const MOCKED_PATH = '/path';
            const MOCKED_ACTIONS = {
                type: 'GET_CREATEDIN',
                path: MOCKED_PATH
            }
            expect(getCreatedIn(MOCKED_PATH)).toEqual(MOCKED_ACTIONS)
        })
    });

    describe('GET_UNIQUETECH',() => {
        it('should return correct actions',() => {
            const MOCKED_PATH = '/path';
            const MOCKED_ACTIONS = {
                type: 'GET_UNIQUETECH',
                path: MOCKED_PATH
            }
            expect(getUniqueTech(MOCKED_PATH)).toEqual(MOCKED_ACTIONS)
        })
    });

    describe('GET_UNIQUEUNIT',() => {
        it('should return correct actions',() => {
            const MOCKED_PATH = '/path';
            const MOCKED_ACTIONS = {
                type: 'GET_UNIQUEUNIT',
                path: MOCKED_PATH
            }
            expect(getUniqueUnit(MOCKED_PATH)).toEqual(MOCKED_ACTIONS)
        })
    });
})