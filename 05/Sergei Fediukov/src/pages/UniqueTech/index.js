import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED } from '../../redux/actions';
import RenderItem from '../../components/RenderItem';

export class UniqueTech extends React.Component {

    componentDidMount() {
        const { url, getUniqueTechDetails } = this.props;
        const path = url.replace('https://age-of-empires-2-api.herokuapp.com/api/v1/', '/');
        getUniqueTechDetails(path);
    }
    render() {
        const { data } = this.props.uniqueTech;
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

const mapDispatchToProps = dispatch => ({
    getUniqueTechDetails: path => dispatch(ACTION_GET_UNIQUE_TECH_DETAILS_REQUESTED(path)),
});
UniqueTech.propTypes = {
    url: PropTypes.string.isRequired,
    getUniqueTechDetails: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(UniqueTech);
