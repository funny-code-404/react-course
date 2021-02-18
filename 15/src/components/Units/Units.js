import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paginations from '../Pagination/Paginations';
import Preloader from '../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByName } from '../../helpers/helpers';
import { 
    errorSelector, 
    offsetSelector, 
    pageLimitSelector, 
    unitsSelector 
} from '../../redux/selectors';
import { unitsUrl } from '../../redux/urls';


function Units() {
    const dispatch = useDispatch();
    const units = useSelector(unitsSelector);
    const offset = useSelector(offsetSelector);
    const pageLimit = useSelector(pageLimitSelector);
    const error = useSelector(errorSelector);
    
    useEffect(() => {
        if(!units.length) {
            dispatch(ACTION_GET_DATA_REQUESTED(unitsUrl));
        }
    }, [dispatch, units.length]);

    return(
        
    <div>
        <h1>Units</h1>

        {units.length ? (<div>
            <Paginations totalItemsCount={units.length}/>
            <ul>
                {units.sort(sortByName).slice(offset, offset + pageLimit).map(
                unit => <li key={unit.id}>
                    <Link to={`units/${unit.name}-${unit.id}`}>
                        {unit.name}
                    </Link>
                </li>)}
            </ul>
        </div>) : error || <Preloader/>}
        
    </div>
    );
};

export default Units;