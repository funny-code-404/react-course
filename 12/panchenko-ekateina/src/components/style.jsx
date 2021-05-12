import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  ${({ background, isAuth }) => `
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    ${
      isAuth
        ? `
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      :after {
        background: black;
        bottom: 0;
        content: "";
        left: 0;
        opacity: 0.7;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
      }
    `
        : ""
    }
`}
`;

export const FullBack = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  padding-top: 150px;

  @media (max-width: 780px) {
    padding-top: 240px;
  }
`;

export const Title = styled.h2`
  color: #dda335;
  font-size: 45px;
  margin: 0;
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 2;
`;

export const Form = styled.form`
  align-items: flex-end;
  background: #6d6955;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 30%;
  min-width: 550px;
  opacity: 0.8;
  padding: 40px;
  position: relative;
  text-align: center;
  z-index: 2;

  @media (max-width: 580px) {
    align-items: center;
    flex-direction: column;
    min-width: 260px;
    padding: 10px;
  }
`;

export const Label = styled.label`
  color: #dda335;
  font-size: 30px;
  margin-right: 10px;

  @media (max-width: 580px) {
    font-size: 25px;
    margin-right: 0;
    padding-bottom: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 25px;
  cursor: pointer;
  height: 40px;
  outline: none;
  width: 160px;

  @media (max-width: 580px) {
    height: 30px;
    width: 130px;
  }
`;

export const Input = styled.input`
  border-radius: 20px;
  height: 40px;
  outline: none;
  padding: 5px;

  @media (max-width: 580px) {
    height: 30px;
  }
`;

export const LinkLogin = styled(Link)`
  color: #dda335;
  font-size: 30px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 2;
`;
