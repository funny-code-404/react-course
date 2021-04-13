import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED } from '../../redux/actions';
import RenderItem from '../../components/RenderItem';

export class UniqueUnit extends React.Component {

    componentDidMount() {
        const { url, getUniqueUnitDetails } = this.props;
        const path = url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/');
        getUniqueUnitDetails(path);
    }
    render() {
        const { data } = this.props.uniqueUnit
        return (
            <div>
                <RenderItem
                    data={data}
                    unique='true' />
            </div >
        );
    };
};
const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
    getUniqueUnitDetails: path => dispatch(ACTION_GET_UNIQUE_UNIT_DETAILS_REQUESTED(path)),
});
UniqueUnit.propTypes = {
    url: PropTypes.string.isRequired,
    getUniqueUnitDetails: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(UniqueUnit);
