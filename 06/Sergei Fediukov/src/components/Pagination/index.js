import { connect } from 'react-redux'
import { leftPage, rightPage, firstPage, lastPage } from '../../ducks/pagination';
import { Box, IconButton } from '@material-ui/core';

const Pagination = (props) => {
    let data = ''
    Boolean(props.find.find_data.length) ? data = props.find.find_data : data = props.cars.data
    const lastPage = Math.ceil(data.length / props.pagination.pageLimit)

    return (
        <Box
            marginTop='5px'
            textAlign='center'>
            <IconButton
                size='small'
                onClick={props.leftPage}
                disabled={props.pagination.currentPage === 1 ? true : false} >
                ≪
            </IconButton>
            <IconButton
                size='small'
                onClick={props.firstPage}>{1}
            </IconButton>
            {
                props.pagination.currentPage === 1 || props.pagination.currentPage === lastPage ||
                <IconButton
                    size='small'
                    disabled>
                    {props.pagination.currentPage}
                </IconButton>
            }
            {
                lastPage === 1 ||
                <IconButton
                    size='small'
                    onClick={props.lastPage}>
                    {lastPage}
                </IconButton>
            }
            <IconButton
                size='small'
                onClick={props.rightPage}
                disabled={props.pagination.currentPage === lastPage ? true : false}>
                ≫
                 </IconButton>
        </Box>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    leftPage: () => dispatch(leftPage()),
    rightPage: () => dispatch(rightPage()),
    firstPage: () => dispatch(firstPage()),
    lastPage: () => dispatch(lastPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);