import { connect } from 'react-redux';

import Form from './Form';

import {REGISTRATION, ENTRY, DELETE, dynamic} from '../../ducks/dynamic';


const mapStateToProps = ({dynamic}) => ({
  dynamic
});


const mapDispatchToProps = (dispatch) => ({
  registrationForm: () => dispatch({
    type: REGISTRATION
  }),
  entryForm: () => dispatch({
    type: ENTRY
  }),
  deleteForm: () => dispatch({
    type:DELETE})
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
