import React from 'react';
import { connect } from 'react-redux';

import {
  ACTION_ON_INPUT_NAME,
} from '../../ducks/actionCreators';

class Form extends React.Component {

  handleName = (e) => {
    const { onInputName } = this.props;
    onInputName(e.target.value); //1
  };

  render() {
    const { names } = this.props;

    return (
      <>
          <input placeholder="Enter Name"  value={names} onChange={this.handleName} />
      </>
    );
  }
}

const mapStateToProps = ({ form, todo }) => ({
  texts: form.names, //5 И тут по итогу мы имеем наш стор
  todo: todo.todo
});

const mapDispatchToProps = (dispatch) => ({
  onInputName: (value) => dispatch(ACTION_ON_INPUT_NAME(value)), //2,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
