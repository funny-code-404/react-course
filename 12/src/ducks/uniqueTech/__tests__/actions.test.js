import { 
    getDataUniqueTechRequsted,
    getDataUniqueTechSucceded,
    getDataUniqueTechFailed,
 } from "../actions";

 describe('ACTIONS UNIQUETECH',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_UNIQUETECH_REQUSTED',
            path,
        }
        expect(getDataUniqueTechRequsted(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_UNIQUETECH_SUCCEDED',
                data
            };
            expect(getDataUniqueTechSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_UNIQUETECH_FAILED',
                 error
             };
             expect(getDataUniqueTechFailed(error)).toEqual(mockedAction)
        })
    })
 })