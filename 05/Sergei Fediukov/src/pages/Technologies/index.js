import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ResultNavigation from '../../components/ResultNavigation';
import { titles } from '../../config';

export const Technologies = ({ history, technologies, location }) => {
    const handleRedirect = () => {
        history.push('/');
    };
    return (
        <div>
            <button onClick={handleRedirect}>go home</button>
            <div className='second_nav'>
                <ResultNavigation
                    data={technologies.data}
                    path={location.pathname}
                    title={titles.technologies} />
            </div>
        </div>
    );
};
const mapStateToProps = state => state;


Technologies.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    technologies: PropTypes.shape({
        error: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
        isFetching: PropTypes.bool,
    }).isRequired,
}
Technologies.defaultProps = {
    technologies: PropTypes.shape({
        error: null,
        isFetching: undefined
    })
}
export default connect(mapStateToProps)(Technologies);