import {actionGetHotels} from "../dataHotels/actions";

export const requestDataPopularHotels = "request_data_popular_hotels";
export const requestDataSucceedPopularHotels = "request_data_popular_hotels_succeed";
export const requestDataFailedPopularHotels = "request_data_popular_hotels_failed";



export const actionGetPopularHotelsRequest = (): actionGetHotels => {
    return {
        type: requestDataPopularHotels,
    }
};

export const actionGetPopularHotelsRequestSucceed = (data: Response): actionGetHotels => {
    return {
        type: requestDataSucceedPopularHotels,
        payload: data,
    }
};

export const actionGetPopularHotelsRequestFailed = (error: Error): actionGetHotels => {
    return {
        type: requestDataFailedPopularHotels,
        payload: error,
    }
};
