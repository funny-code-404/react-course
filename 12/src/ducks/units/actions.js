export const GET_DATA_UNITS_REQUESTED = 'GET_DATA_UNITS_REQUESTED';
export const GET_DATA_UNITS_SUCCEDED = 'GET_DATA_UNITS_SUCCEDED';
export const GET_DATA_UNITS_FAILED = 'GET_DATA_UNITS_FAILED';

export const getDataUnitsRequested = (path) => ({
    type: GET_DATA_UNITS_REQUESTED,
    path
});

export const getDataUnitsSucceded = ({data}) => ({
    type: GET_DATA_UNITS_SUCCEDED,
    data
});

export const getDataUnitsFailed = (error) => ({
    type: GET_DATA_UNITS_FAILED,
    error
});