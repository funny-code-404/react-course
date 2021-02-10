import { 
    getDataCreatedInRequsted,
    getDataCreatedInSucceded,
    getDataCreatedInFailed,
 } from "../actions";

describe('ACTION CREATEDIN', () => {
   describe('gets way', () => {
    it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
         type: 'GET_DATA_CREATEDIN_REQUSTED',
         path
        };
        expect(getDataCreatedInRequsted(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_CREATEDIN_SUCCEDED',
                data
            };
            expect(getDataCreatedInSucceded({data})).toEqual(mockedAction)
       })
   });

   describe('gets error',() => {
       it('should return correct action',() => {
            const error = 'error, no data';
            const mockedAction = {
                type: 'GET_DATA_CREATEDIN_FAILED',
                error
            };
            expect(getDataCreatedInFailed(error)).toEqual(mockedAction)
       })
   })
})