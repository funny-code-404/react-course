import { 
    getDataStructuresRequsted,
    getDataStructuresSucceded,
    getDataStructuresFailed,
 } from "../actions";

 describe('ACTIONS STRUCTURES',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_STRUCTURES_REQUSTED',
            path,
        }
        expect(getDataStructuresRequsted(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_STRUCTURES_SUCCEDED',
                data
            };
            expect(getDataStructuresSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_STRUCTURES_FAILD',
                 error
             };
             expect(getDataStructuresFailed(error)).toEqual(mockedAction)
        })
    })
 })