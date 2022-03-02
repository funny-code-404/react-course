import { connect } from 'react-redux';
import { ACTION_GET_USERS_DATA_REQUESTED } from '../../ducks/users/actions';
import { usersDataSelector } from '../../ducks/users/selectors';

import DataList from './DataList';

const mapStateToProps = (state) => ({
  usersData: usersDataSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getUsersData: (url) => dispatch(ACTION_GET_USERS_DATA_REQUESTED(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
