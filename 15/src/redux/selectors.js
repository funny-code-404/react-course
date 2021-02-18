const errorSelector = state => state.ageOfEmpires.error?.message;
const offsetSelector = state => state.paginations.offset;
const pageLimitSelector = state => state.paginations.pageLimit;
const civilizationsSelector = state => state.ageOfEmpires.fetchedData.civilizations;
const structuresSelector = state => state.ageOfEmpires.fetchedData.structures;
const technologiesSelector = state => state.ageOfEmpires.fetchedData.technologies;
const unitsSelector = state => state.ageOfEmpires.fetchedData.units;
const addDataSelector = state => state.ageOfEmpires.addData;
const fetchingSelector = state => state.ageOfEmpires.isFetching;



export { 
    errorSelector, 
    offsetSelector, 
    pageLimitSelector,
    civilizationsSelector,
    structuresSelector,
    technologiesSelector,
    unitsSelector,
    addDataSelector,
    fetchingSelector
};