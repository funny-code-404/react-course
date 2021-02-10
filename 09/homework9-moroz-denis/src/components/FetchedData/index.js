import { connect } from 'react-redux';

import FetchedData from './FetchedData'
import { ACTION_GET_DOGS } from '../../ducks/dogs';

const mapStateToProps = (state) => ({...state});

const mapDispatchToProps = (dispach) => ({
    dispachOnFetchData: payload => dispach(ACTION_GET_DOGS(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchedData);