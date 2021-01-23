import React from 'react';
import { connect } from 'react-redux';
import { Box, TextField } from '@material-ui/core';
import { findData } from '../../ducks/finder';
import {
    showMakeColumn, showModelColumn, showYearColumn, showPowerColumn, showPriceColumn,
    hideMakeColumn, hideModelColumn, hideYearColumn, hidePowerColumn, hidePriceColumn
} from '../../ducks/checkboxes';
import Pagination from '../Pagination'
import { Checkbox } from '@material-ui/core';

class Menu extends React.Component {

    render() {

        const handleColumnCheckBox = (e) => {
            switch (e.target.id) {
                case 'make':
                    return e.target.checked ? this.props.hideMakeColumnn() : this.props.showMakeColumnn()
                case 'model':
                    return e.target.checked ? this.props.hideModelColumnn() : this.props.showModelColumnn()
                case 'year':
                    return e.target.checked ? this.props.hideYearColumnn() : this.props.showYearColumnn()
                case 'power':
                    e.target.checked ? this.props.hidePowerColumnn() : this.props.showPowerColumnn()
                case 'price':
                    return e.target.checked ? this.props.hidePriceColumnn() : this.props.showPriceColumnn()
                default:
                    break;
            }
        }
        const { make, model, power, price, year } = this.props.checkboxes
        return <>
            <Box
                display='flex'
                flexDirection='column'
                padding='10px'
                borderLeft='1px solid black'>
                <Box>
                    <label
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='make'
                            onClick={handleColumnCheckBox} />
                        {make ? 'Hide' : 'Show'}"Make" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='model'
                            onClick={handleColumnCheckBox} />
                        {model ? 'Hide' : 'Show'}"Model" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='year'
                            onClick={handleColumnCheckBox} />
                        {year ? 'Hide' : 'Show'}"Year" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='power'
                            onClick={handleColumnCheckBox} />
                        {power ? 'Hide' : 'Show'}"Horsepower" column
                    </label>
                </Box>
                <Box>
                    <label>
                        <Checkbox
                            size="small"
                            color="default"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                            id='price'
                            onClick={handleColumnCheckBox} />
                        {price ? 'Hide' : 'Show'}"Price" column
                    </label>
                </Box>
                <Box
                    marginTop='5px'>
                    {
                        (!Boolean(this.props.find.find_data.length) && this.props.find.find_flag) ?
                            <>
                                <TextField
                                    error
                                    id="outlined-basic"
                                    label="Ошибка"
                                    variant="outlined"
                                    onChange={this.props.findDataAction}
                                />
                                <Box component='span' color='red'>Ничего не найдено, показаны все результаты</Box>
                            </>
                            :
                            <TextField
                                id="outlined-basic"
                                label="Что ищем?"
                                variant="outlined"
                                onChange={this.props.findDataAction} />
                    }
                </Box>
                <Pagination />
            </Box>
        </>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    findDataAction: (e) => dispatch(findData(e.target.value)),

    showMakeColumnn: () => dispatch(showMakeColumn()),
    showModelColumnn: () => dispatch(showModelColumn()),
    showYearColumnn: () => dispatch(showYearColumn()),
    showPowerColumnn: () => dispatch(showPowerColumn()),
    showPriceColumnn: () => dispatch(showPriceColumn()),

    hideMakeColumnn: () => dispatch(hideMakeColumn()),
    hideModelColumnn: () => dispatch(hideModelColumn()),
    hideYearColumnn: () => dispatch(hideYearColumn()),
    hidePowerColumnn: () => dispatch(hidePowerColumn()),
    hidePriceColumnn: () => dispatch(hidePriceColumn()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
