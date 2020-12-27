import React from 'react';
import { connect } from 'react-redux';
import loading from './loading.gif'

import './styles.css';

class BigLoader extends React.Component {

    get isLoading() {
        const { civilizations, units, structures, technologies, item, uniqueUnit, uniqueTech, } = this.props;

        return civilizations.isFetching ||
            units.isFetching ||
            structures.isFetching ||
            technologies.isFetching
        // item.isFetching
        // uniqueUnit.isFetching ||
        // uniqueTech.isFetching
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
    technologies,
    item,
    uniqueUnit,
    uniqueTech
});

export default connect(mapStateToProps)(BigLoader);
