import { useReducer } from 'react';
import { TableContext } from '../context';
import { initialCarsState, carsReducer } from '../../../ducks/carsReducer';
import { combineReducers } from './utils';

const initialState = {
  cars: initialCarsState,
};

const reducer = combineReducers({
  cars: carsReducer,
});

export const TableContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};
