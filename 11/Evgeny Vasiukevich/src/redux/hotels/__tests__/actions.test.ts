import { actionGetAvailableHotelsFailed, actionGetAvailableHotelsRequested, actionGetAvailableHotelsSucceed, actionGetPopularHotelsFailed, actionGetPopularHotelsRequested, actionGetPopularHotelsSucceed, actionSetCurrentHotel, HotelsTypesActions } from "../actions";


describe('HOTELS_ACTIONS', () => {
    const testPayloadHotelsFailed = null;
    const testPayloadHotelsSucceed: [] = [];
    const testPayloadCurrentHotel = {};

    describe('hotels request', () => {
        it('should create action request', () => {
            const mockResultPopularHotelsRequest = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS,
            };

            expect(actionGetPopularHotelsRequested()).toEqual(mockResultPopularHotelsRequest);
        });

        it('should create action request', () => {
            const mockResultAvailableHotelsRequest = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS,
            };

            expect(actionGetAvailableHotelsRequested()).toEqual(mockResultAvailableHotelsRequest);
        });
    });

    describe('hotels succeed', () => {
        it('should create action succeed', () => {
            const mockResultPopularHotelsSucceed = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS_SUCCEED,
                payload: testPayloadHotelsSucceed,
            };

            expect(actionGetPopularHotelsSucceed(testPayloadHotelsSucceed)).toEqual(mockResultPopularHotelsSucceed);
        });
        
        it('should create action succeed', () => {
            const mockResultAvailableHotelsSucceed = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_SUCCEED,
                payload: testPayloadHotelsSucceed,
            };

            expect(actionGetAvailableHotelsSucceed(testPayloadHotelsSucceed)).toEqual(mockResultAvailableHotelsSucceed);
        });
    });

    describe('hotels failed', () => {
        it('should create action failed', () => {
            const mockResultPopularHotelsFailed = {
                type: HotelsTypesActions.REQUEST_POPULAR_HOTELS_FAILED,
                payload: testPayloadHotelsFailed,
            };

            expect(actionGetPopularHotelsFailed(testPayloadHotelsFailed)).toEqual(mockResultPopularHotelsFailed);
        });
        
        it('should create action failed', () => {
            const mockResultAvailableHotelsFailed = {
                type: HotelsTypesActions.REQUEST_AVAILABLE_HOTELS_FAILED,
                payload: testPayloadHotelsFailed,
            };

            expect(actionGetAvailableHotelsFailed(testPayloadHotelsFailed)).toEqual(mockResultAvailableHotelsFailed);
        });
    });

    describe('current hotel', () => {
        it('should create action current hotel', () => {
            const mockResultCurrentHotel = {
                type: HotelsTypesActions.CURRENT_HOTEL,
                payload: testPayloadCurrentHotel,
            };

            expect(actionSetCurrentHotel(testPayloadCurrentHotel)).toEqual(mockResultCurrentHotel);
        });
    })
});