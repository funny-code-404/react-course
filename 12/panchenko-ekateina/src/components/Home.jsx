import { auth } from "../firebase";
import styled from "styled-components";
import background from "../img/ageOfEmpiresHome.jpg";
import { Container, FullBack } from "./style";

const Title = styled.h2`
  color: #fff;
  font-size: 50px;
  margin-bottom: 20px;
  padding: 100px 0 100px 0;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 590px) {
    font-size: 30px;
    padding: 100px 0 50px 0;
  }
`;

const Button = styled.button`
  align-items: center;
  background: #a1a38b;
  border-radius: 25px;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  justify-content: center;
  height: 40px;
  margin: auto;
  max-width: 50%;
  min-width: 150px;
  outline: none;
  text-transform: uppercase;
`;

export const Home = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Container background={background}>
      <FullBack>
        <Title>Welcome to Age Of Empires!</Title>
        <Button onClick={handleLogout}>Logout</Button>
      </FullBack>
    </Container>
  );
};
