import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class Preloader extends React.Component {

    get isLoading() {
        const { cars } = this.props;
        return cars.isFetching;
    }
    render() {
        return this.isLoading && <div className="preloader">Loading...</div>;
    }
}

const mapStateToProps = ({ cars }) => ({
    cars
});

export default connect(mapStateToProps)(Preloader);
