import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import loading from './loading.gif';
import './styles.css';

export class LoaderPrimary extends React.Component {

    get isLoading() {
        const { civilizations, units, structures, technologies } = this.props;

        return civilizations.isFetching ||
            units.isFetching ||
            structures.isFetching ||
            technologies.isFetching
    };

    render() {
        return this.isLoading &&
            <div className="loading">
                <div>
                    <span>Loading...</span>
                </div>
                <img src={loading} alt="loading..."></img>
            </div>;
    };
};

const mapStateToProps = ({ civilizations, units, structures, technologies }) => ({
    civilizations,
    units,
    structures,
    technologies
});

LoaderPrimary.propTypes = {
    civilizations: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array,
        error: PropTypes.string
    }).isRequired,
    units: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array,
        error: PropTypes.string
    }).isRequired,
    structures: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array,
        error: PropTypes.string
    }).isRequired,
    technologies: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array,
        error: PropTypes.string
    }).isRequired,
}
LoaderPrimary.defaultProps = {
    civilizations: PropTypes.shape({
        error: null,
        data: undefined
    }),
    units: PropTypes.shape({
        error: null,
        data: undefined
    }),
    structures: PropTypes.shape({
        error: null,
        data: undefined
    }),
    technologies: PropTypes.shape({
        error: null,
        data: undefined
    }),
}
export default connect(mapStateToProps)(LoaderPrimary);
