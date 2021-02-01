import React from 'react';
import { connect } from 'react-redux';
import loading from './loading.gif'

import './styles.css';

export class BigLoader extends React.Component {

    get isLoading() {
        const { civilizations, units, structures, technologies } = this.props;

        return civilizations.isFetching ||
            units.isFetching ||
            structures.isFetching ||
            technologies.isFetching
    }

    render() {
        return this.isLoading &&
            <div className="loading">
                <div>
                    <span>Loading...</span>
                </div>
                <img src={loading} alt="loading..."></img>
            </div>;
    }
}

const mapStateToProps = ({ civilizations, units, structures, technologies, item, uniqueUnit, uniqueTech }) => ({
    civilizations,
    units,
    structures,
    technologies
});

export default connect(mapStateToProps)(BigLoader);
