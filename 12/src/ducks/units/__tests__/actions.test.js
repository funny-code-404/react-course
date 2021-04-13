import { 
    getDataUnitsRequested,
    getDataUnitsSucceded,
    getDataUnitsFailed,
 } from "../actions";

 describe('ACTIONS UNITS',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_UNITS_REQUESTED',
            path,
        }
        expect(getDataUnitsRequested(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_UNITS_SUCCEDED',
                data
            };
            expect(getDataUnitsSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_UNITS_FAILED',
                 error
             };
             expect(getDataUnitsFailed(error)).toEqual(mockedAction)
        })
    })
 })