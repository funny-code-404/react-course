import { connect } from 'react-redux';
import {
    sortAscYearColumn, sortAscPriceColumn, sortAscPowerColumn, sortAscMakeColumn, sortAscModelColumn,
    sortDescYearColumn, sortDescPriceColumn, sortDescPowerColumn, sortDescMakeColumn, sortDescModelColumn,
} from '../../ducks/sort'
import { titles } from '../DataList/config';
import { Grid, Box, IconButton } from '@material-ui/core';

const Column = (props) => {
    const column_sort = () => {
        return props.title === titles.year ? [props.sortAscYearColumn, props.sortDescYearColumn]
            : props.title === titles.price ? [props.sortAscPriceColumn, props.sortDescPriceColumn]
                : props.title === titles.horsepower ? [props.sortAscPowerColumn, props.sortDescPowerColumn]
                    : props.title === titles.make ? [props.sortAscMakeColumn, props.sortDescMakeColumn]
                        : props.title === titles.model ? [props.sortAscModelColumn, props.sortDescModelColumn] : ''
    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Box
                border={1}
                width='100%'
                height='40px'
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Box
                    component='span'>
                    {props.title}
                </Box>
                {props.title !== '№' ?
                    <Box
                        margin='0  5px 0 10px'
                        display='flex'
                        flexDirection='column'>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[0]}>
                            ⋀
                            </IconButton>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[1]}>
                            ⋁
                            </IconButton>
                    </Box>
                    : ''
                }
            </Box>
            {
                props.data.map((x, i) =>
                    <Box
                        border={1}
                        width='100%'
                        height='35px'
                        padding='5px 0'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                        key={props.keys[i]}>
                        {x}
                    </Box>)
            }
        </Grid>
    )
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({

    sortAscYearColumn: () => dispatch(sortAscYearColumn()),
    sortAscPriceColumn: () => dispatch(sortAscPriceColumn()),
    sortAscPowerColumn: () => dispatch(sortAscPowerColumn()),
    sortAscMakeColumn: () => dispatch(sortAscMakeColumn()),
    sortAscModelColumn: () => dispatch(sortAscModelColumn()),

    sortDescYearColumn: () => dispatch(sortDescYearColumn()),
    sortDescPriceColumn: () => dispatch(sortDescPriceColumn()),
    sortDescPowerColumn: () => dispatch(sortDescPowerColumn()),
    sortDescMakeColumn: () => dispatch(sortDescMakeColumn()),
    sortDescModelColumn: () => dispatch(sortDescModelColumn())

});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
