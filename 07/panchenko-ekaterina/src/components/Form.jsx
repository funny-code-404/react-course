import React from "react";
import styled from "styled-components";

export const Form = ({ render }) => {
  return (
    <Container>
      <Item type="text" placeholder="Name" />
      <Item type="email" placeholder="Email" />
      <Item type="password" placeholder="Password" />
      {render()}
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
