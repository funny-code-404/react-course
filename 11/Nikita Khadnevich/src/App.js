import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodosRequested } from './ducks/todos/actions';
import { todosSelector } from './ducks/todos/selectors';

const App = () => {
  const data = useSelector(todosSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosRequested('https://age-of-empires-2-api.herokuapp.com/api/v1'));
  }, []);

  useEffect(() => {
    console.log(`data`, data.resources)
  }, [data]);

  const units = () => {
    console.log(`object`, data.resources.civilizations)
  }

  return (
    <>
    wqe
        {/* <button onClick={units}>dsds</ button> */}
    </>
  )
};

export default App;
