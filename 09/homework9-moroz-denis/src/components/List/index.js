import { connect } from 'react-redux';

import List from './List';

const mapStateToProps = (state) => {
    return ({
        dogs: state.dogs,
    })
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);