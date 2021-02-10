import { 
    getDataTechnologiesRequsted,
    getDataTechnologiesSucceded,
    getDataTechnologiesFailed,
 } from "../actions";

 describe('ACTIONS TECHNOLOGIE',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_TECHNOLOGIES_REQUSTED',
            path,
        }
        expect(getDataTechnologiesRequsted(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_TECHNOLOGIES_SUCCEDED',
                data
            };
            expect(getDataTechnologiesSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_TECHNOLOGIES_FAILED',
                 error
             };
             expect(getDataTechnologiesFailed(error)).toEqual(mockedAction)
        })
    })
 })