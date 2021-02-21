import React from "react";
import { Form } from "./Form";

const withCheckIn = (Component) => (props) => {
  const formType = "Check In";
  return <Component formType={formType} />;
};

const withLogin = (Component) => (props) => {
  const formType = "Login";
  return <Component formType={formType} />;
};

const withAccountDeleting = (Component) => (props) => {
  const formType = "Account deleting";
  return <Component formType={formType} />;
};

export const CheckIn = withCheckIn(Form);
export const Login = withLogin(Form);
export const AccountDeleting = withAccountDeleting(Form);
