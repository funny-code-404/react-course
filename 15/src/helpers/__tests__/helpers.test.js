import { sortByAge, sortByName } from '../helpers';

describe('Helpers', () => {
    describe('sortByAge', () => {

        it('should sort objects by their age of emergence in alphabetical order', () => {
            const mockedArray = [{ age: 'Dark age' }, { age: 'Castle age' }];
            expect(mockedArray.sort(sortByAge)).toEqual([{ age: 'Castle age' }, { age: 'Dark age' }]);
        });

        it('shouldn\'t sort objects sorted by their age of emergence in alphabetical order', () => {
            const mockedArray = [{ age: 'Castle age' }, { age: 'Dark age' }];
            expect(mockedArray.sort(sortByAge)).toEqual([{ age: 'Castle age' }, { age: 'Dark age' }]);
        });

        it('shouldn\'t sort objects if their ages of emergence are the same', () => {
            const mockedArray = [{ age: 'Castle age' }, { age: 'Castle age' }];
            expect(mockedArray.sort(sortByAge)).toEqual([{ age: 'Castle age' }, { age: 'Castle age' }]);
        });

    });

    describe('sortByName', () => {

        it('should sort objects by their names in alphabetical order', () => {
            const mockedArray = [{ name: 'Bark' }, { name: 'Application' }];
            expect(mockedArray.sort(sortByName)).toEqual([{ name: 'Application' }, { name: 'Bark' }]);
        });

        it('shouldn\'t sort objects sorted by their names in alphabetical order', () => {
            const mockedArray = [{ name: 'Application' }, { name: 'Bark' }];
            expect(mockedArray.sort(sortByName)).toEqual([{ name: 'Application' }, { name: 'Bark' }]);
        });

        it('shouldn\'t sort objects if their names are the same', () => {
            const mockedArray = [{ name: 'Bark' }, { name: 'Bark' }];
            expect(mockedArray.sort(sortByName)).toEqual([{ name: 'Bark' }, { name: 'Bark' }]);
        });

    });
});