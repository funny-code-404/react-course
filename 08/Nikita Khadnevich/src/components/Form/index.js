import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
  ACTION_ON_INPUT_EMAIL,
  ACTION_ON_INPUT_PASSWORD
} from '../../ducks/actionCreators';

class Form extends React.Component {

  handleName = (e) => {
    const { onInputName } = this.props;
    onInputName(e.target.value);
  };

  handleEmail= (e) => {
    const { onInputEmail } = this.props;
    onInputEmail(e.target.value);
  };

  handlePass= (e) => {
    const { onInputPass } = this.props;
    onInputPass(e.target.value);
  };

  render() {
    const { names, email, password } = this.props;

    return (
      <>
          <input placeholder="Enter Name"  value={names} onChange={this.handleName} />
          <input placeholder="Enter Email" value={email} onChange={this.handleEmail} />
          <input placeholder="Enter Pass" value={password} onChange={this.handlePass} />
      </>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  text: form.names,
  email: form.email,
  password: form.password
});

const mapDispatchToProps = (dispatch) => ({
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)),
  onInputEmail: (value) => dispatch(ACTION_ON_INPUT_EMAIL(value)),
  onInputPass: (value) => dispatch(ACTION_ON_INPUT_PASSWORD(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
