import { THotel } from "../../../types/types";
import { HotelsTypesActions } from "../actions";
import { hotelsReducer, initialHotelsState } from "../reducer"
import { THotelsActions, THotelsState } from "../types"


describe('HOTELS_REDUCER', () => {
    let mockHotelsState: THotelsState;

    beforeEach(() => {
        mockHotelsState = {
            popularHotels: {
                hotels: null,
                isLoading: false,
                error: null,
            },
            availableHotels: {
                hotels: null,
                isLoading: false,
                error: null,
            },
            currentHotel: null,
        };
    })

    describe('when initial state', () => {
        it('then should return initial state', () => {
            expect(hotelsReducer(undefined, {} as THotelsActions)).toEqual(initialHotelsState);
        });
    });

    describe('when hotels requested', () => {

        it('then should return state with updated popular hotels', () => {
            const testActionPopularHotels = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS,
                payload: null,
            };
            mockHotelsState.popularHotels.isLoading = true;
            
            expect(hotelsReducer(undefined, testActionPopularHotels)).toEqual(mockHotelsState);
        });

        it('then should return state with updated available hotels', () => {
            const testActionAvailableHotels = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS,
                payload: null,
            };
            mockHotelsState.availableHotels.isLoading = true;

            expect(hotelsReducer(undefined, testActionAvailableHotels)).toEqual(mockHotelsState);
        });
    });

    describe('when hotels succeed', () => {
        const testPayloadHotelsSucceed = [] as THotel[];

        it('then should return state with updated popular hotels', () => {
            const testActionPopularHotels = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED,
                payload: testPayloadHotelsSucceed,
            };
            mockHotelsState.popularHotels.hotels = testPayloadHotelsSucceed;
            
            expect(hotelsReducer(undefined, testActionPopularHotels)).toEqual(mockHotelsState);
        });

        it('then should return state with updated available hotels', () => {
            const testActionAvailableHotels = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_SUCCEED,
                payload: testPayloadHotelsSucceed,
            };
            mockHotelsState.availableHotels.hotels = testPayloadHotelsSucceed;

            expect(hotelsReducer(undefined, testActionAvailableHotels)).toEqual(mockHotelsState);
        });
    });

    describe('when hotels failed', () => {
        const testPayloadHotelsFailed = new Error;

        it('then should return state with updated popular hotels', () => {
            const testActionPopularHotels = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS_FAILED,
                payload: testPayloadHotelsFailed,
            };
            mockHotelsState.popularHotels.error = testPayloadHotelsFailed;
            
            expect(hotelsReducer(undefined, testActionPopularHotels)).toEqual(mockHotelsState);
        });

        it('then should return state with updated available hotels', () => {
            const testActionAvailableHotels = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_FAILED,
                payload: testPayloadHotelsFailed,
            };
            mockHotelsState.availableHotels.error = testPayloadHotelsFailed;

            expect(hotelsReducer(undefined, testActionAvailableHotels)).toEqual(mockHotelsState);
        });
    });

    describe('when set current hotel', () => {
        const testPayloadCurrentHotel = {} as THotel;

        it('then should return state with updated current hotel', () => {
            const testActionCurrentHotel = {
                type: HotelsTypesActions.CURRENT_HOTEL,
                payload: testPayloadCurrentHotel,
            };
            mockHotelsState.currentHotel = testPayloadCurrentHotel;
            
            expect(hotelsReducer(undefined, testActionCurrentHotel)).toEqual(mockHotelsState);
        });
    });
})