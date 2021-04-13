import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paginations from '../Pagination/Paginations';
import Preloader from '../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByName } from '../../helpers/helpers';
import { errorSelector, unitsSelector } from '../../ducks/fetchDataReducer/selectors';
import { offsetSelector, pageLimitSelector } from '../../ducks/paginationsReducer/paginationsReducer';
import { unitsUrl } from '../../redux/urls';
import { StyledUl } from './style';


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
            <StyledUl>
                {units.sort(sortByName).slice(offset, offset + pageLimit).map(
                unit => <li key={unit.id}>
                    <Link to={`units/${unit.name}-${unit.id}`}>
                        {unit.name}
                    </Link>
                </li>)}
            </StyledUl>
        </div>) : (error && <h2>{error}</h2>) || <Preloader/>}
        
    </div>
    );
};

export default Units;