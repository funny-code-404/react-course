import styled from 'styled-components';

export const LoadingMessage = styled.h1`
  margin: 300px;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 300px;
  height: 50px;
  text-align: center;
  margin: 20px 0;
  font-size: 1.5em;
  line-height: 2em;
  font-weight: bold;
  cursor: pointer;
  border: solid transparent 2px;
  border-radius: 15px;

  :hover {
    border: solid #9d9387 2px;
  }
`;