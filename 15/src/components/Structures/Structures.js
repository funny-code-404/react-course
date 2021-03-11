import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paginations from '../Pagination/Paginations';
import Preloader from '../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByAge } from '../../helpers/helpers';

import { structuresUrl } from '../../redux/urls';
import { StyledUl } from './style';
import { errorSelector, structuresSelector } from '../../ducks/fetchDataReducer/selectors';
import { offsetSelector, pageLimitSelector } from '../../ducks/paginationsReducer/paginationsReducer';


function Structures() {
    const dispatch = useDispatch();
    const structures = useSelector(structuresSelector);
    const offset = useSelector(offsetSelector);
    const pageLimit = useSelector(pageLimitSelector);
    const error = useSelector(errorSelector);
    
    useEffect(() => {
        if(!structures.length) {
            dispatch(ACTION_GET_DATA_REQUESTED(structuresUrl));
        }
    }, [dispatch, structures.length]);

    return(       
    <div>
        <h1>Structures</h1>

        {structures.length ? (<div>
            <Paginations totalItemsCount={structures.length} />
            <StyledUl>
                {structures.sort(sortByAge).slice(offset, offset + pageLimit).map(
                structure => <li key={structure.id}>
                    <Link to={`structures/${structure.name}-${structure.id}`}>
                        {structure.age}&nbsp;age&nbsp;{structure.name.toLowerCase()}
                    </Link>
                </li>)}
            </StyledUl>
        </div>) : (error && <h2>{error}</h2>) || <Preloader />}

    </div>
    );
};

export default Structures;