import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ResultNavigation from '../../components/ResultNavigation';
import { titles } from '../../config';

export const Structures = ({ history, structures, location }) => {

    const handleRedirect = () => {
        history.push('/');
    }
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={structures.data}
                    path={location.pathname}
                    title={titles.structures} />
            </div>
        </div>
    );
};

const mapStateToProps = state => state;

Structures.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    structures: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.object)]),
        isFetching: PropTypes.bool,
    }).isRequired,
}
Structures.defaultProps = {
    structures: PropTypes.shape({
        error: null,
        data: [],
        isFetching: undefined
    })
}
export default connect(mapStateToProps)(Structures);