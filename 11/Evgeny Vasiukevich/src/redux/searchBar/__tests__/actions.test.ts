import { actionChangeAdults, actionChangeChildren, actionChangeCounterStates, actionChangeRooms, actionSetDateFrom, actionSetDateTo, actionSetSearch, SearchBarTypesActions } from "../actions";


describe('HOTELS_ACTIONS', () => {
    describe('when set search', () => {
        it('then sould create action search', () => {
            const testString = 'test string';
            const mockResultSearch = {
                type: SearchBarTypesActions.SEARCH,
                payload: testString,
            };

            expect(actionSetSearch(testString)).toEqual(mockResultSearch);
        })
    });

    describe('when set dates', () => {
        const testDate = new Date;
        
        it('then sould create action date from', () => {
            const mockResultDate = {
                type: SearchBarTypesActions.DATE_FROM,
                payload: testDate,
            };

            expect(actionSetDateFrom(testDate)).toEqual(mockResultDate);
        });

        it('then sould create action date to', () => {
            const mockResultDate = {
                type: SearchBarTypesActions.DATE_TO,
                payload: testDate,
            };

            expect(actionSetDateTo(testDate)).toEqual(mockResultDate);
        });
    });

    describe('when change properties', () => {
        it('then sould create action adults', () => {
            const testAdults = 5;
            const mockResultAdults = {
                type: SearchBarTypesActions.ADULTS,
                payload: testAdults,
            };

            expect(actionChangeAdults(testAdults)).toEqual(mockResultAdults);
        });

        it('then sould create action children', () => {
            const testChildren: [] = [];
            const mockResultChildren = {
                type: SearchBarTypesActions.CHILDREN,
                payload: testChildren,
            };

            expect(actionChangeChildren(testChildren)).toEqual(mockResultChildren);
        });

        it('then sould create action rooms', () => {
            const testRooms = 11;
            const mockResultRooms = {
                type: SearchBarTypesActions.ROOMS,
                payload: testRooms,
            };

            expect(actionChangeRooms(testRooms)).toEqual(mockResultRooms);
        })
    });

    describe('when change elems states', () => {
        it('then sould reate action elems states', () => {
            const testStates = {
                isModalOpen: true,
                isSelectAvailable: true,
                isSelectChange: false,
            };
            const mockResultStates = {
                type: SearchBarTypesActions.ELEMS_STATES,
                payload: testStates,
            };

            expect(actionChangeCounterStates(testStates)).toEqual(mockResultStates);
        });
    });
});