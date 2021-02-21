import React from "react";
import styled from "styled-components";

export const formConfig = {
  checkIn: "Check In",
  login: "Login",
  accountDeleting: "Account deleting",
};

const checkInText = "Registration";
const loginText = "Оставлять меня в системе";
const accountDeletingComment = "Comment...";
const accountDeletingRadio = ["1", "2", "3", "4", "5"];
const accountDeletingText = " To evaluate the Team's work";
const accountDeletingButton = "Send";

export const Form = ({ formType }) => {
  return (
    <Container>
      <Item type="text" placeholder="Name" />
      <Item type="email" placeholder="Email" />
      <Item type="password" placeholder="Password" />
      {formType === formConfig.checkIn && (
        <Forms>
          <h2>{formType}</h2>
          <Item type="checkbox" value="a2" />
          <Item type="text" placeholder="Surname" />
          <Item type="date" placeholder="year of birth" />
          <Item type="tel" placeholder="telephone" />
          <Button>{checkInText}</Button>
        </Forms>
      )}
      {formType === formConfig.login && (
        <Forms>
          <h2>{formType}</h2>
          <Item type="checkbox" value="a2" />
          <p>{loginText}</p>
          <Button>{formType} in</Button>
        </Forms>
      )}
      {formType === formConfig.accountDeleting && (
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
      )}
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  margin-bottom: 50px;
  padding: 15px;
  border: 2px solid black;
`;

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
