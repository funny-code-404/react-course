import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED } from '../../redux/actions';
import RenderItem from '../../components/RenderItem';

export class UniqueCreatedIn extends React.Component {

    componentDidMount() {
        const { url, getUniqueCreatedInDetails } = this.props;
        const path = url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/');
        getUniqueCreatedInDetails(path);
    }
    render() {
        const { data } = this.props.uniqueCreatedIn;
        return (
            Boolean(data.length) ?
                <RenderItem
                    data={data[0]}
                    unique='true'
                /> :
                Boolean([data].length) ?
                    <RenderItem
                        data={data}
                        unique='true'
                    /> : ''
        );
    };
};
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getUniqueCreatedInDetails: path => dispatch(ACTION_GET_UNIQUE_CREATED_IN_DETAILS_REQUESTED(path)),
});

UniqueCreatedIn.propTypes = {
    url: PropTypes.string.isRequired,
    getUniqueCreatedInDetails: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(UniqueCreatedIn);
