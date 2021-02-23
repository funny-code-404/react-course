import React from "react";
import { Form } from "./Form";
import styled from "styled-components";

const checkInText = "Registration";
const loginText = "Оставлять меня в системе";
const accountDeletingComment = "Comment...";
const accountDeletingRadio = ["1", "2", "3", "4", "5"];
const accountDeletingText = " To evaluate the Team's work";
const accountDeletingButton = "Send";

const withCheckIn = (Component) => (props) => {
  const formType = "Check In";
  return (
    <Forms>
      <h2>{formType}</h2>
      <Item type="checkbox" value="a2" />
      <Item type="text" placeholder="Surname" />
      <Item type="date" placeholder="year of birth" />
      <Item type="tel" placeholder="telephone" />
      <Button>{checkInText}</Button>
    </Forms>
  );
};

const withLogin = (Component) => (props) => {
  const formType = "Login";
  return (
    <Forms>
      <h2>{formType}</h2>
      <Item type="checkbox" value="a2" />
      <p>{loginText}</p>
      <Button>{formType} in</Button>
    </Forms>
  );
};

const withAccountDeleting = (Component) => (props) => {
  const formType = "Account deleting";
  return (
    <Forms>
      <h2>{formType}</h2>
      <Comment placeholder={accountDeletingComment} />
      <p>{accountDeletingText}</p>
      <Radio>
        {accountDeletingRadio.map((elem) => (
          <p>
            <input type="radio" />
            {elem}
          </p>
        ))}
      </Radio>
      <Button>{accountDeletingButton}</Button>
    </Forms>
  );
};

const Item = styled.input`
  width: 90%;
  margin-bottom: 10px;
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
`;

const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Comment = styled.textarea`
  width: 90%;
  height: 250px;
  padding: 15px;
`;

const Radio = styled.div`
  display: flex;
`;

export const CheckIn = withCheckIn(Form);
export const Login = withLogin(Form);
export const AccountDeleting = withAccountDeleting(Form);
