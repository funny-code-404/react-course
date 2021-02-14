import { 
    userActionSucceded,
    userActionFailed,
    getSignUpRequested,
    getLoginRequested,
    signOutRequested
 } from "../actions";

describe('ACTION AUTH', () => {
   describe('gets way', () => {
    it('should return correct action',() => {
        const user ={ text: 'text' };
        const mockedAction = {
         type: 'USER_ACTION_SUCCEDED',
         user
        };
        expect(userActionSucceded(user)).toEqual(mockedAction)
    })
   });

   describe('gets email and password', () => {
    it('should return correct action',() => {
        const email = 'email';
        const password = 'password'
        const mockedAction = {
            type: 'GET_SIGN_UP_REQUESTED',
            email,
            password
        };
        expect(getSignUpRequested( email, password )).toEqual(mockedAction)
    })
   });

   describe('gets email and password', () => {
    it('should return correct action',() => {
        const email = 'email';
        const password = 'password'
        const mockedAction = {
            type: 'GET_LOGIN_REQUESTED',
            email,
            password,
        };
        expect(getLoginRequested( email, password )).toEqual(mockedAction)
    })
   });

   describe('gets error',() => {
       it('should return correct action',() => {
            const error = 'error, no data';
            const mockedAction = {
                type: 'USER_ACTION_FAILED',
                error
            };
            expect(userActionFailed(error)).toEqual(mockedAction)
       })
   });

      describe('pull actions', () => {
        it('should return correct action',() => {
            const mockedAction = {
                type: 'SIGN_OUT_REQUESTED',
            };
            expect(signOutRequested()).toEqual(mockedAction)
        })
    });
})

// npm run test src/ducks/auth