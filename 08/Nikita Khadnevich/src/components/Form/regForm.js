import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_SECNAME,
  ACTION_ON_INPUT_YEARBIRH,
  ACTION_ON_INPUT_TELNUMB
} from '../../ducks/actionCreators';

class RegForm extends React.Component {

   handleSecName = (e) => {
    const { onInputSecName } = this.props;
    onInputSecName(e.target.value);
  };

  handleBirth= (e) => {
    const { onInputBirth } = this.props;
    onInputBirth(e.target.value);
  };

  handleTel= (e) => {
    const { onInputaTel } = this.props;
    onInputaTel(e.target.value);
  };

  render() {
    const { names, email, password, secname, birth, telephone } = this.props;

    return (
      <>
         <p>Registration</p>
          <input placeholder="Enter Second Name"  value={secname} onChange={this.handleSecName} />
          <input placeholder="Enter Birth Year" value={birth} onChange={this.handleBirth} />
          <input placeholder="Enter Tel." value={telephone} onChange={this.handleTel} />
      </>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  secname: form.secname,
  birth: form.birth,
  telephone: form.telephone,
});

const mapDispatchToProps = (dispatch) => ({
   onInputSecName: (value) => dispatch(ACTION_ON_INPUT_SECNAME(value)),
   onInputBirth: (value) => dispatch(ACTION_ON_INPUT_YEARBIRH(value)),
   onInputaTel: (value) => dispatch(ACTION_ON_INPUT_TELNUMB(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
