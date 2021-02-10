import { 
    getDataUniqueUnitRequsted,
    getDataUniqueUnitSucceded,
    getDataUniqueUnitFailed,
 } from "../actions";

 describe('ACTIONS UNIQUEUNIT',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_UNIQUEUNIT_REQUSTED',
            path,
        }
        expect(getDataUniqueUnitRequsted(path)).toEqual(mockedAction)
        })
    });
    describe('gets data',() => {
        it('should return correct action',() => {
            const data = {
                data: [
                    {
                        id: 1,
                        name: 'Show text...'
                    }
                ]
            };
            const mockedAction = {
                type: 'GET_DATA_UNIQUEUNIT_SUCCEDED',
                data
            };
            expect(getDataUniqueUnitSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_UNIQUEUNIT_FAILED',
                 error
             };
             expect(getDataUniqueUnitFailed(error)).toEqual(mockedAction)
        })
    })
 })