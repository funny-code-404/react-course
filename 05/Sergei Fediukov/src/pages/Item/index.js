import React from 'react';
import PropTypes from 'prop-types'
import { paths } from '../../config';
import { connect } from 'react-redux';
import { ACTION_GET_ITEM_DETAILS_REQUESTED } from '../../redux/actions'
import RenderItem from '../../components/RenderItem';

export class Item extends React.Component {

    componentDidMount() {
        let path = '';
        const { location, match, getItemDetails } = this.props;

        if (location) {
            if (location.pathname.includes(paths.civilizations)) {
                path = paths.civilization
            };
            if (location.pathname.includes(paths.units)) {
                path = paths.unit
            };
            if (location.pathname.includes(paths.structures)) {
                path = paths.structure
            };
            if (location.pathname.includes(paths.technologies)) {
                path = paths.technology
            };
        };
        (+match.params.id) ?
            getItemDetails(`${path}/${match.params.id}`)
            : history.goBack()
    };
    render() {
        const { item } = this.props
        return (
            <RenderItem
                data={item.data} />
        );
    };
};
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getItemDetails: path => dispatch(ACTION_GET_ITEM_DETAILS_REQUESTED(path)),
});

Item.propTypes = {
    civilizations: PropTypes.object.isRequired,
    getItemDetails: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);