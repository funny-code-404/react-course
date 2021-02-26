import { auth } from "../reducer";

describe('REDUCER AUTH',() => {
    describe('initial',() => {
        it('should return correct value',() => {
            const initial = {
                user: null,
                isFetching: false,
                error: null,
             }
            expect(auth(initial, {})).toEqual(initial)
        })
    });
    describe('REQUESTED ACTIONS',() => {
        it('should return correct value',() => {

            const MOCKED_REQUSTED = {
                type: "SIGN_OUT_REQUESTED",
            };

            const initial = {
                user: null,
                isFetching: false,
                error: null,
             };

            const MOCKED_RESULT = {
                user: null,
                isFetching: true,
                error: null,
            };
            expect(auth(initial, MOCKED_REQUSTED)).toEqual(MOCKED_RESULT)
        })
    });
    describe('REQUESTED ACTIONS',() => {
        it('should return correct value',() => {
            const email = 'email';
	        const password = 'password';

            const MOCKED_REQUSTED = {
                type: "GET_LOGIN_REQUESTED",
                email,
	            password,
            };

            const initial = {
                user: null,
                isFetching: false,
                error: null,
             };

            const MOCKED_RESULT = {
                user: null,
                isFetching: true,
                error: null,
            };
            expect(auth(initial, MOCKED_REQUSTED)).toEqual(MOCKED_RESULT)
        })
    });
    describe('REQUESTED ACTIONS',() => {
        it('should return correct value',() => {
            const email = 'email';
	        const password = 'password';

            const MOCKED_REQUSTED = {
                type: "GET_SIGN_UP_REQUESTED",
                email,
	            password,
            };

            const initial = {
                user: null,
                isFetching: false,
                error: null,
             };

            const MOCKED_RESULT = {
                user: null,
                isFetching: true,
                error: null,
            };
            expect(auth(initial, MOCKED_REQUSTED)).toEqual(MOCKED_RESULT)
        })
    });
    describe('SUCCEDED ACTIONS',() => {
        it('should return correct value',() => {
            const user = { name: 'text...' }

            const MPCKED_SUCCEDED = {
                type: "USER_ACTION_SUCCEDED",
                user
            };

            const initial = {
                user: null,
                isFetching: true,
                error: null,
            };

            const MOCKED_RESULT = {
                user: MPCKED_SUCCEDED.user,
                isFetching: false,
                error: null,
            };

            expect(auth(initial, MPCKED_SUCCEDED)).toEqual(MOCKED_RESULT)
        })
    });

    describe('FAILED ACTIONS',() => {
        it('should return correct value',() => {

            const error = 'error, no data';

            const MOCKED_FAILED = {
                type: 'USER_ACTION_FAILED',
                error,
            }

            const initial = {
                user: null,
                isFetching: true,
                error: null,
            }

            const MOCKED_RESULT = {
                user: null,
				isFetching: false,
				error: MOCKED_FAILED.error,
            }

            expect(auth(initial, MOCKED_FAILED)).toEqual(MOCKED_RESULT)
        })
    });
});

// npm run test src/ducks/auth