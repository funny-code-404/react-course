import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Paginations from '../Pagination/Paginations';
import Preloader from '../Preloader/Preloader';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByAge } from '../../helpers/helpers';
import { 
    structuresSelector,
    offsetSelector, 
    pageLimitSelector, 
    errorSelector 
} from '../../redux/selectors';
import { structuresUrl } from '../../redux/urls';


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
            <ul>
                {structures.sort(sortByAge).slice(offset, offset + pageLimit).map(
                structure => <li key={structure.id}>
                    <Link to={`structures/${structure.name}-${structure.id}`}>
                        {structure.age}&nbsp;age&nbsp;{structure.name.toLowerCase()}
                    </Link>
                </li>)}
            </ul>
        </div>) : error || <Preloader />}

    </div>
    );
};

export default Structures;