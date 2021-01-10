import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import Column from '../Column'
import Menu from '../Menu';
import { Sort } from '../Sort'
import { titles } from './config';
import { Box } from '@material-ui/core';

class DataList extends React.Component {

    componentDidMount() {
        this.props.getDataAction();
    }

    render() {
        let data = ''

        // Find check

        Boolean(this.props.find.find_data.length) ? data = this.props.find.find_data : data = this.props.cars.data

        // Ascending or descending check

        data = Sort(this.props, data)

        //Pagination check

        data = data.slice(this.props.pagination.indexOfFirst, this.props.pagination.indexOfLast);

        return <>
            <Box
                padding='5px'
            >
                <Box
                    border={1}
                    display='flex'
                    alignItems='baseline'
                    minWidth='690px'>
                    <Column
                        title={titles.number}
                        data={data.map(x => x.id)}
                        keys={data.map(x => x.id)} />
                    {
                        this.props.checkboxes.make &&
                        <Column
                            title={titles.make}
                            data={data.map(x => x.make)}
                            keys={data.map(x => x.id)}
                        />
                    }
                    {this.props.checkboxes.model &&
                        <Column
                            title={titles.model}
                            data={data.map(x => x.model)}
                            keys={data.map(x => x.id)} />
                    }
                    {
                        this.props.checkboxes.year &&
                        <Column title={titles.year}
                            data={data.map(x => x.year)}
                            keys={data.map(x => x.id)}
                        />
                    }
                    {
                        this.props.checkboxes.power &&
                        <Column
                            title={titles.horsepower}
                            data={data.map(x => x.horsepower)}
                            keys={data.map(x => x.id)} />
                    }
                    {
                        this.props.checkboxes.price &&
                        <Column
                            title={titles.price}
                            data={data.map(x => x.price)}
                            keys={data.map(x => x.id)} />
                    }
                </Box>
            </Box>
            <Menu />
        </>
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    getDataAction: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
