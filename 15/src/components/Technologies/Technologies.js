import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Preloader from '../Preloader/Preloader';
import Paginations from '../Pagination/Paginations';
import { ACTION_GET_DATA_REQUESTED } from '../../ducks/fetchDataReducer/actions';
import { sortByName } from '../../helpers/helpers';
import { errorSelector, technologiesSelector } from '../../ducks/fetchDataReducer/selectors';
import { offsetSelector, pageLimitSelector } from '../../ducks/paginationsReducer/paginationsReducer';
import { technologiesUrl } from '../../redux/urls';
import { StyledUl } from './style';


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
            <StyledUl>
                {technologies.sort(sortByName).slice(offset, offset + pageLimit).map(
                technology => <li key={technology.id}>
                    <Link to={`technologies/${technology.name}-${technology.id}`}>
                        {technology.name}
                    </Link>
                </li>)} 
            </StyledUl>
        </div>) : (error && <h2>{error}</h2>) || <Preloader/>}

    </div>
    );
};

export default Technologies;