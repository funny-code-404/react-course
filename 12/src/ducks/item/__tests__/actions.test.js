import { 
    getDataItemRequested,
    getDataItemSucceded,
    getDataItemFailed,
 } from "../actions";

 describe('ACTIONS ITEM',() => {
    describe('gets way', () => {
        it('should return correct action',() => {
        const path = '/path';
        const mockedAction = {
            type: 'GET_DATA_ITEM_REQUESTED',
            path,
        }
        expect(getDataItemRequested(path)).toEqual(mockedAction)
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
                type: 'GET_DATA_ITEM_SUCCEDED',
                data
            };
            expect(getDataItemSucceded({data})).toEqual(mockedAction)
        })
    });
    describe('gets error',() => {
        it('should return correct action',() => {
             const error = 'error, no data';
             const mockedAction = {
                 type: 'GET_DATA_ITEM_FAILED',
                 error
             };
             expect(getDataItemFailed(error)).toEqual(mockedAction)
        })
    })
 })