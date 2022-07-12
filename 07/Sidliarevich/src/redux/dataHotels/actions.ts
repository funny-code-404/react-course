
export const requestData = "request_data";
export const requestDataSucceed = "request_data_succeed";
export const requestDataFailed = "request_data_failed";
export const inputValue = "input_value";

export type actionGetHotels = {
    type: string,
    payload?: Response | Error | string,
}

export const actionGetHotelsRequest = (): actionGetHotels => {
    return {
        type: requestData,
    }
};

export const actionGetHotelsRequestSucceed = (data: Response): actionGetHotels => {
    return {
        type: requestDataSucceed,
        payload: data,
    }
};

export const actionGetHotelsRequestFailed = (error: Error): actionGetHotels => {
    return {
        type: requestDataFailed,
        payload: error,
    }
};

export const actionGetInputValue = (value: string): actionGetHotels => {
    return {
        type: inputValue,
        payload: value,
    }
};