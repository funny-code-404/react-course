import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ResultNavigation from '../../components/ResultNavigation';
import { titles } from '../../config';

export const Civilizations = ({ history, civilizations, location }) => {
    const handleRedirect = () => {
        history.push('/');
    }
    return (
        <div>
            <button data-testid='nav_button' onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={civilizations.data}
                    path={location.pathname}
                    title={titles.civilizations} />
            </div>
        </div>
    );
};
const mapStateToProps = state => state;

Civilizations.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    civilizations: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
        isFetching: PropTypes.bool,
    }).isRequired,
}
Civilizations.defaultProps = {
    civilizations: PropTypes.shape({
        error: null,
        isFetching: undefined,
    })
}
export default connect(mapStateToProps)(Civilizations);