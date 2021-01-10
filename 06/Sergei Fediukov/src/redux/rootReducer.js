import { Reducer } from '../ducks/cars';
import { CheckBoxesReducer } from '../ducks/checkboxes';
import { FindReducer } from '../ducks/finder';
import { SortReducer } from '../ducks/sort';
import { PaginationReducer } from '../ducks/pagination';

export default {
    cars: Reducer,
    find: FindReducer,
    checkboxes: CheckBoxesReducer,
    sort: SortReducer,
    pagination: PaginationReducer,
};
