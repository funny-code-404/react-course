import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_CIVILS_REQUESTED } from '../../ducks/civils/actions';
import {civilsSelector} from '../../ducks/civils/selectors'

function Civilizations() {
  const dispatch = useDispatch();
  const civilizations = useSelector(civilsSelector);

  useEffect(() => {
    dispatch(ACTION_GET_CIVILS_REQUESTED());
  }, []);

  const data = civilizations.civilizations

  return (
    <div>
      {typeof data}
      {/* {civilizations.map(civil => (
        <li key={civil.id}>{civil.name}</li>
      ))} */}
    </div>
  );
}

export default Civilizations;
