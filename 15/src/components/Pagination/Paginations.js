import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_CHANGE_PAGE, pageNumberSelector } from '../../ducks/paginationsReducer/paginationsReducer';
import { pageLimitSelector } from '../../ducks/paginationsReducer/paginationsReducer';
import { StyledPagination } from './style';

function Paginations({ totalItemsCount }) {
    
    const dispatch = useDispatch();
    const pageNumber = useSelector(pageNumberSelector);
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