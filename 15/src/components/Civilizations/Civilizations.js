import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paginations from '../Pagination/Paginations';
import Preloader from '../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByName } from '../../helpers/helpers';
import { civilizationsUrl } from '../../redux/urls';
import { StyledUl } from './style';
import { civilizationsSelector, errorSelector } from '../../ducks/fetchDataReducer/selectors';
import { offsetSelector, pageLimitSelector } from '../../ducks/paginationsReducer/paginationsReducer';


function Civilizations() {
    const dispatch = useDispatch();
    const civilizations = useSelector(civilizationsSelector);
    const offset = useSelector(offsetSelector);
    const pageLimit = useSelector(pageLimitSelector); 
    const error = useSelector(errorSelector);
    
    useEffect(() => {
        if(!civilizations.length) {
            dispatch(ACTION_GET_DATA_REQUESTED(civilizationsUrl));
        }
    }, [dispatch, civilizations.length]);

    return(
        
        <div>
            <h1>Civilizations</h1>
            
            {civilizations.length ? (<div>
                <Paginations totalItemsCount={civilizations.length}/>
                <StyledUl>
                    {civilizations.sort(sortByName).slice(offset, offset + pageLimit).map(
                    civilization => <li key={civilization.id}>
                        <Link to={`civilizations/${civilization.name}`}>
                            {civilization.name}
                        </Link>
                    </li>)}
                </StyledUl>
            </div>) : (error && <h2>{error}</h2>) || <Preloader/>}
            
        </div>
    );
};

export default Civilizations;