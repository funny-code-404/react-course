export const GET_DATA = 'GET_DATA';
export const GET_DETAILS = 'GET_DETAILS';

export const GET_UNIQUE_UNIT_DETAILS = 'GET_UNIQUE_UNIT_DETAILS';
export const GET_UNIQUE_TECH_DETAILS = 'GET_UNIQUE_TECH_DETAILS';
export const GET_UNIQUE_CREATED_IN_DETAILS = 'GET_UNIQUE_CREATED_IN_DETAILS';

export const getData = path => ({
    type: GET_DATA,
    path,
});
export const getDetails = path => ({
    type: GET_DETAILS,
    path,
});
export const getUniqueUnitDetails = path => ({
    type: GET_UNIQUE_UNIT_DETAILS,
    path,
});
export const getUniqueTechDetails = path => ({
    type: GET_UNIQUE_TECH_DETAILS,
    path,
});
export const getUniqueCreatedInDetails = path => ({
    type: GET_UNIQUE_CREATED_IN_DETAILS,
    path,
});