
const civilizationsSelector = state => state.ageOfEmpires.fetchedData.civilizations;
const structuresSelector = state => state.ageOfEmpires.fetchedData.structures;
const technologiesSelector = state => state.ageOfEmpires.fetchedData.technologies;
const unitsSelector = state => state.ageOfEmpires.fetchedData.units;
const addDataSelector = state => state.ageOfEmpires.addData;
const fetchingSelector = state => state.ageOfEmpires.isFetching;
const errorSelector = state => state.ageOfEmpires.error?.message;

export { 
    civilizationsSelector,
    structuresSelector,
    technologiesSelector,
    unitsSelector,
    addDataSelector,
    fetchingSelector,
    errorSelector
};