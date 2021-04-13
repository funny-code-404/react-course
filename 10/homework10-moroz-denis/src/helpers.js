export const getNameForFetch = function(str) {
    
    return str.split('/').slice(-1);
};

export default getNameForFetch;