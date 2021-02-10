import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ResultNavigation from '../../components/ResultNavigation';
import { titles } from '../../config';

export const Units = ({ history, units, location }) => {

    const handleRedirect = () => {
        history.push('/');
    }
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={units.data}
                    path={location.pathname}
                    title={titles.units} />
            </div>
        </div>
    );
};
const mapStateToProps = state => state;
Units.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    units: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.object)]).isRequired,
        isFetching: PropTypes.bool,
    }).isRequired,
}
Units.defaultProps = {
    units: PropTypes.shape({
        error: null,
        isFetching: undefined
    })
}
export default connect(mapStateToProps)(Units);