import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import Paginations from '../Pagination/Paginations';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByName } from '../../helpers/helpers';
import { 
    technologiesSelector,
    offsetSelector, 
    pageLimitSelector, 
    errorSelector
} from '../../redux/selectors';
import { technologiesUrl } from '../../redux/urls';


function Technologies() {
    const dispatch = useDispatch();
    const technologies = useSelector(technologiesSelector);
    const offset = useSelector(offsetSelector);
    const pageLimit = useSelector(pageLimitSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        if(!technologies.length){
            dispatch(ACTION_GET_DATA_REQUESTED(technologiesUrl));
        }
    }, [dispatch, technologies.length]);

    return(
        
    <div>
        <h1>Technologies</h1>

        {technologies.length ? (<div>
            <Paginations totalItemsCount={technologies.length}/>
            <ul>
                {technologies.sort(sortByName).slice(offset, offset + pageLimit).map(
                technology => <li key={technology.id}>
                    <Link to={`technologies/${technology.name}-${technology.id}`}>
                        {technology.name}
                    </Link>
                </li>)} 
            </ul>
        </div>) : error || <Preloader/>}

    </div>
    );
};

export default Technologies;