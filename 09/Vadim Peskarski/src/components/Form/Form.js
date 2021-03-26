import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  ACTION_ON_NAME_INPUT,
  ACTION_ON_EMAIL_INPUT,
  ACTION_ON_PASSWORD_INPUT
} from '../../ducks/actionCreators.js';

const UserForm = styled.div`
  width: 200px;
  min-height: 250px;
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: 184px;
  margin-bottom: 4px;
`

class Form extends React.Component {
  handleNameChange = (e) => {
    const { onNameInputChange } = this.props;
    onNameInputChange(e.target.value);
  }

  handleEmailChange = (e) => {
    const { onEmailInputChange } = this.props;
    onEmailInputChange(e.target.value);
  }

  handlePasswordChange = (e) => {
    const { onPasswordInputChange } = this.props;
    onPasswordInputChange(e.target.value);
  }

  render() {
    const { render, renderData, name, email, password } = this.props;

    return (
        <UserForm>
          <div>
            <Input name="name" placeholder="имя" onChange={this.handleNameChange} value={name} />
            <Input name="email" placeholder="email" onChange={this.handleEmailChange} value={email} />
            <Input name="password" placeholder="пароль" onChange={this.handlePasswordChange} value={password} />
          </div>
          <div>
            {render(renderData)}
          </div>
        </UserForm>
    )
  }
}

const mapStateToProps = ({ form }) => ({
  name: form.name,
  email: form.email,
  password: form.password
});

const mapDispatchToProps = (dispatch) => ({
  onNameInputChange: (value) => dispatch(ACTION_ON_NAME_INPUT(value)),
  onEmailInputChange: (value) => dispatch(ACTION_ON_EMAIL_INPUT(value)),
  onPasswordInputChange: (value) => dispatch(ACTION_ON_PASSWORD_INPUT(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
