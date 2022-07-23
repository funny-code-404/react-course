import { SearchBarTypesActions } from "../actions";
import { initialSearchBarState, searchBarReducer } from "../reducer";
import { TSearchBarActions, TSearchBarState } from "../types";

describe('SEARCH_BAR_REDUCER', () => {
    let mockSearchBarState: TSearchBarState;

    beforeEach(() => {
        mockSearchBarState = {
            search: '',
            dateRange: {
                dateFrom: null,
                dateTo: null,
            },
            counter: {
                properties: {
                    adults: 0,
                    children: [],
                    rooms: 1
                },
                states: {
                    isModalOpen: false,
                    isSelectAvailable: false,
                    isSelectChange: true,
                }
            }
        };
    })

    describe('when initial state', () => {
        it('then should return initial state', () => {
            expect(searchBarReducer(undefined, {} as TSearchBarActions)).toEqual(initialSearchBarState);
        });
    });

    describe('when set search', () => {
        it('then sould return state with updated search', () => {
            const testString = 'test string';
            const mockResultSearch = {
                type: SearchBarTypesActions.SEARCH,
                payload: testString,
            };
            mockSearchBarState.search = testString;

            expect(searchBarReducer(undefined, mockResultSearch)).toEqual(mockSearchBarState);
        });
    });

    describe('when set dates', () => {
        const testDate = new Date;

        it('then sould return state with updated date from', () => {
            const mockResultDate = {
                type: SearchBarTypesActions.DATE_FROM,
                payload: testDate,
            };
            mockSearchBarState.dateRange.dateFrom = testDate;

            expect(searchBarReducer(undefined, mockResultDate)).toEqual(mockSearchBarState);
        });

        it('then sould return state with updated date from', () => {
            const mockResultDate = {
                type: SearchBarTypesActions.DATE_TO,
                payload: testDate,
            };
            mockSearchBarState.dateRange.dateTo = testDate;

            expect(searchBarReducer(undefined, mockResultDate)).toEqual(mockSearchBarState);
        });
    });

    describe('when change properties', () => {
        it('then sould return state with updated adults', () => {
            const testAdults = 5;
            const mockResultAdults = {
                type: SearchBarTypesActions.ADULTS,
                payload: testAdults,
            };
            mockSearchBarState.counter.properties.adults = testAdults;

            expect(searchBarReducer(undefined, mockResultAdults)).toEqual(mockSearchBarState);
        });

        it('then sould return state with updated children', () => {
            const testChildren: [] = [];
            const mockResultChildren = {
                type: SearchBarTypesActions.CHILDREN,
                payload: testChildren,
            };
            mockSearchBarState.counter.properties.children = testChildren;

            expect(searchBarReducer(undefined, mockResultChildren)).toEqual(mockSearchBarState);
        });

        it('then sould return state with updated rooms', () => {
            const testRooms = 11;
            const mockResultRooms = {
                type: SearchBarTypesActions.ROOMS,
                payload: testRooms,
            };
            mockSearchBarState.counter.properties.rooms = testRooms;

            expect(searchBarReducer(undefined, mockResultRooms)).toEqual(mockSearchBarState);
        })
    });

    describe('when change elems states', () => {
        it('then sould return state with updated elems states', () => {
            const testStates = {
                isModalOpen: true,
                isSelectAvailable: true,
                isSelectChange: false,
            };
            const mockResultStates = {
                type: SearchBarTypesActions.ELEMS_STATES,
                payload: testStates,
            };
            mockSearchBarState.counter.states.isModalOpen = true;
            mockSearchBarState.counter.states.isSelectAvailable = true;
            mockSearchBarState.counter.states.isSelectChange = false;

            expect(searchBarReducer(undefined, mockResultStates)).toEqual(mockSearchBarState);
        });
    });
})