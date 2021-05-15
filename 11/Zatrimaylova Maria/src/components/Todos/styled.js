import styled from 'styled-components';

export const TodosContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  width: 40%;
  border-radius: 15px;
  border: 2px solid lightgray;
  margin: 20px 0;
  padding-left: 20px;
  padding-bottom: 20px; 
`;

export const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;