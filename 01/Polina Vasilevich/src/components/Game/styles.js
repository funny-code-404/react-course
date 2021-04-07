import styled from "styled-components";

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameInfo = styled.div`
  margin-bottom: 10px;
  margin: 20px 0;
  font-size: 2rem;
`;

export const Button = styled.button`
  margin-top: 20px;

  width: 300px;
  height: 50px;
  border-radius: 5px;

  font: 14px "Century Gothic", Futura, sans-serif;
  font-size: 1.4em;

  background-color: #eee2e0;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
