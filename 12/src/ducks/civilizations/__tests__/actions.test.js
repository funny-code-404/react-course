import { 
    getDataCivilizationsRequested,
    getDataCivilizationsSucceded,
    getDataCivilizationsFailed,
 } from "../actions";

describe('ACTION CILIVIZATIONS', () => {
   describe('gets way', () => {
    it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
         type: 'GET_DATA_CIVILIZATIONS_REQUESTED',
         path
        };
        expect(getDataCivilizationsRequested(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_CIVILIZATIONS_SUCCEDED',
                data
            };
            expect(getDataCivilizationsSucceded({data})).toEqual(mockedAction)
       })
   });

   describe('gets error',() => {
       it('should return correct action',() => {
            const error = 'error, no data';
            const mockedAction = {
                type: 'GET_DATA_CIVILIZATIONS_FAILED',
                error
            };
            expect(getDataCivilizationsFailed(error)).toEqual(mockedAction)
       })
   })
})