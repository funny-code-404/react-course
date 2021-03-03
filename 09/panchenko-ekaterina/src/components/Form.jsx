import React from "react";
import { connect } from "react-redux";
import { Container, Input } from "./styles";
import {
  ACTION_INPUT_NAME,
  ACTION_INPUT_EMAIL,
  ACTION_INPUT_PASSWORD,
} from "../ducks/info";
import {
  ACTION_INPUT_COMMENT,
  ACTION_RADIO_RATE,
} from "../ducks/accountDeleting";
import { ACTION_LOGIN_CHECKBOX } from "../ducks/login";
import {
  ACTION_CHECHIN_CHECKBOX,
  ACTION_INPUT_SURNAME,
  ACTION_INPUT_DATE,
  ACTION_INPUT_PHONE,
} from "../ducks/checkin";

const FormComponent = (props) => {
  const {
    render,
    name,
    email,
    password,
    onNameChange,
    onEmailChange,
    onPasswordChange,
  } = props;

  return (
    <Container>
      <Input
        onChange={(event) => onNameChange(event.target.value)}
        value={name}
        type="text"
        placeholder="Name"
      />
      <Input
        onChange={(event) => onEmailChange(event.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <Input
        onChange={(event) => onPasswordChange(event.target.value)}
        value={password}
        autoComplete="on"
        type="password"
        placeholder="Password"
      />
      {render(props)}
    </Container>
  );
};

const mapStateToProps = ({ info, accountDeleting, login, checkin }) => ({
  name: info.name,
  email: info.email,
  password: info.password,
  comment: accountDeleting.comment,
  rate: accountDeleting.rate,
  loginCheckbox: login.checkbox,
  checkinCheckbox: checkin.checkbox,
  surname: checkin.surname,
  date: checkin.date,
  phone: checkin.phone,
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange: (value) => dispatch(ACTION_INPUT_NAME(value)),
  onEmailChange: (value) => dispatch(ACTION_INPUT_EMAIL(value)),
  onPasswordChange: (value) => dispatch(ACTION_INPUT_PASSWORD(value)),
  onCommentChange: (value) => dispatch(ACTION_INPUT_COMMENT(value)),
  onRateChange: (value) => dispatch(ACTION_RADIO_RATE(value)),
  onLoginCheckboxChange: (value) => dispatch(ACTION_LOGIN_CHECKBOX(value)),
  onCheckinCheckboxChange: (value) => dispatch(ACTION_CHECHIN_CHECKBOX(value)),
  onSurnameChange: (value) => dispatch(ACTION_INPUT_SURNAME(value)),
  onDateChange: (value) => dispatch(ACTION_INPUT_DATE(value)),
  onPhoneChange: (value) => dispatch(ACTION_INPUT_PHONE(value)),
});

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
