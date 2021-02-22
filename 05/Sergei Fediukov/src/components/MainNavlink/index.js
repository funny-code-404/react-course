import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import {
    ACTION_GET_CIVILIZATIONS_DATA_REQUESTED,
    ACTION_GET_STRUCTURES_DATA_REQUESTED,
    ACTION_GET_UNITS_DATA_REQUESTED,
    ACTION_GET_TECHNOLOGIES_DATA_REQUESTED
} from '../../redux/actions'
import { paths } from '../../config'

export const MainNavLink = ({ title, path, getCivilizationsAction, getUnitsAction, getStructuresAction, getTechnologiesAction }) => {

    const handleClick = () => {
        switch (path) {
            case paths.civilizations: return getCivilizationsAction(path);
            case paths.units: return getUnitsAction(path);
            case paths.structures: return getStructuresAction(path);
            case paths.technologies: return getTechnologiesAction(path);
        }
    }
    return (
        <div className='menu_link' >
            <NavLink
                activeClassName="nav_active"
                onClick={handleClick}
                exact to={path}>{title}
            </NavLink>
        </div >
    )
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getCivilizationsAction: path => dispatch(ACTION_GET_CIVILIZATIONS_DATA_REQUESTED(path)),
    getUnitsAction: path => dispatch(ACTION_GET_UNITS_DATA_REQUESTED(path)),
    getStructuresAction: path => dispatch(ACTION_GET_STRUCTURES_DATA_REQUESTED(path)),
    getTechnologiesAction: path => dispatch(ACTION_GET_TECHNOLOGIES_DATA_REQUESTED(path)),
});

MainNavLink.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    getCivilizationsAction: PropTypes.func.isRequired,
    getUnitsAction: PropTypes.func.isRequired,
    getStructuresAction: PropTypes.func.isRequired,
    getTechnologiesAction: PropTypes.func.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavLink);
