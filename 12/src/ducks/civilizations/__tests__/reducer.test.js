import { civilizations } from "../reducer";

describe('REDUCER CIVILIZATIONS',() => {
    describe('initial',() => {
        it('should return correct value',() => {
            const initial = {
                data: null,
                isFetching: false,
                error: null,
             }
            expect(civilizations(initial, {})).toEqual(initial)
        })
    });
    describe('REQUESTED ACTIONS',() => {
        it('should return correct value',() => {

            const path = '/path';
            const MPCKED_REQUSTED = {
                type: "GET_DATA_CIVILIZATIONS_REQUESTED",
                path
            };

            const initial = {
                data: null,
                isFetching: false,
                error: null,
             };

            const MOCKED_RESULT = {
                data: null,
                isFetching: true,
                error: null,
            };
            expect(civilizations(initial, MPCKED_REQUSTED)).toEqual(MOCKED_RESULT)
        })
    });
    describe('SUCCEDED ACTIONS',() => {
        it('should return correct value',() => {
            const MOCKED_DATA = [
                {
                    id: 1,
                    name: 'text...',
                }
            ];

            const MPCKED_SUCCEDED = {
                type: "GET_DATA_CIVILIZATIONS_SUCCEDED",
                data: MOCKED_DATA,
            };

            const MOCKED_INITIAL = {
                data: null,
                isFetching: true,
                error: null,
            };

            const MOCKED_RESULT = {
                data: MPCKED_SUCCEDED.data,
                isFetching: false,
                error: null,
            };

            expect(civilizations(MOCKED_INITIAL, MPCKED_SUCCEDED)).toEqual(MOCKED_RESULT)
        })
    });

    describe('FAILED ACTIONS',() => {
        it('should return correct value',() => {

            const MOCKED_ERROR = 'error, no data';

            const MOCKED_FAILED = {
                type: 'GET_DATA_CIVILIZATIONS_FAILED',
                error: MOCKED_ERROR,
            }

            const MOCKED_INITIAL = {
                data: null,
                isFetching: true,
                error: null,
            }

            const MOCKED_RESULT = {
                data: null,
				isFetching: false,
				error: MOCKED_FAILED.error,
            }

            expect(civilizations(MOCKED_INITIAL, MOCKED_FAILED)).toEqual(MOCKED_RESULT)
        })
    });
});