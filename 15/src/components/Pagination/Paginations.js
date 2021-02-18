import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_CHANGE_PAGE } from '../../ducks/paginationsReducer';
import { pageLimitSelector } from '../../redux/selectors';
import { StyledPagination } from './style';

function Paginations({ totalItemsCount }) {
    
    const dispatch = useDispatch();
    const pageNumber = useSelector(state => state.paginations.pageNumber);
    const pageLimit = useSelector(pageLimitSelector);
   
    const handlePageChange = (number) => {
        if(number !== pageNumber) {
            dispatch(ACTION_CHANGE_PAGE(number));
        }  
    };

    return(
            <StyledPagination>
                <Pagination
                    activePage={pageNumber}
                    itemsCountPerPage={pageLimit}
                    totalItemsCount={totalItemsCount}
                    pageRangeDisplayed={3}
                    onChange={handlePageChange}  
                />
            </StyledPagination>
    );
};

export default Paginations;