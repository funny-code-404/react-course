import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import styled from "styled-components";

const Link = styled(NavLink)`
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  text-decoration: none;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 30px;
  width: 80%;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  font-size: 20px;
  list-style-type: none;
  text-transform: uppercase;

  @media (max-width: 780px) {
    padding-bottom: 10px;
    text-align: center;
  }
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Navigation = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return null;
  }

  return (
    <Header>
      <nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/civilizations">Civilizations</Link>
          </Item>
          <Item>
            <Link to="/units">Units</Link>
          </Item>
          <Item>
            <Link to="/structures">Structures</Link>
          </Item>
          <Item>
            <Link to="/technologies">Technologies</Link>
          </Item>
        </List>
      </nav>
    </Header>
  );
};
