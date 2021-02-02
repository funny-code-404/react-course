import { initialState } from '../ducks/cars';
import { initialCheckBoxesState } from '../ducks/checkboxes';
import { initialFindState } from '../ducks/finder';
import { initialSortState } from '../ducks/sort';
import { initialPaginationState } from '../ducks/pagination';

export default {
    cars: initialState,
    find: initialFindState,
    checkboxes: initialCheckBoxesState,
    sort: initialSortState,
    pagination: initialPaginationState
};