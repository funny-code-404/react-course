import {
    civilizationsSelector,
    structuresSelector,
    technologiesSelector,
    unitsSelector,
    addDataSelector,
    fetchingSelector,
    errorSelector
} from '../selectors';

describe('Fetch Data selectors', () => {
    let mockedStore;
    beforeEach(() => {
        mockedStore = {
            ageOfEmpires : {
                fetchedData: { 
                  civilizations: 'Some Civilization',
                  structures: 'Some Structure',
                  technologies: 'Powerfull Techs',
                  units: { 0: 'Strong Unit' },
                },
                addData: 1337,
                isFetching: false,
                error: null,
              }
        }
    });
    
    it('civilizationsSelector should return civilizations from store', () => {
        expect(civilizationsSelector(mockedStore)).toBe('Some Civilization');
    });

    it('structuresSelector should return structures from store', () => {
        expect(structuresSelector(mockedStore)).toBe('Some Structure');
    });

    it('technologiesSelector should return technologies from store', () => {
        expect(technologiesSelector(mockedStore)).toBe('Powerfull Techs');
    });

    it('unitsSelector should return units from store', () => {
        expect(unitsSelector(mockedStore)).toEqual({ 0: 'Strong Unit' });
    });

    it('addDataSelector should return addData from store', () => {
        expect(addDataSelector(mockedStore)).toBe(1337);
    });

    it('fetchingSelector should return fetching status from store', () => {
        expect(fetchingSelector(mockedStore)).toBe(false);
    });

    it('errorSelector should return undefined when error is null', () => {
        expect(errorSelector(mockedStore)).toBe(undefined);
    });

    it('errorSelector should return message when error is defined', () => {
        expect(errorSelector({
            ageOfEmpires: { 
                error: { message: 'Unexpected Error!' }
            }
        })).toBe('Unexpected Error!');
    });
});