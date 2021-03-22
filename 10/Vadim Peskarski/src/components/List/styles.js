import styled from 'styled-components';

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 0;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border: ${props => props.isActive ? '3px solid black' : '1px solid black'};
  margin: 8px 18px 0 0;

`

export const Name = styled.h3`
  margin: 4px 16px 0 8px;
  text-align: center;
`

export const Todo = styled.h4`
  margin: 4px 16px 8px 8px;
`
export const Priority = styled.h5`
  margin: 4px 16px 8px 8px;
`

export const DeleteButton = styled.button`
  width: 100px;
  height: 25px;
  font-weight: bold;
  margin: 8px 8px 8px 120px;
  border: 2px solid grey;
  border-radius: 4px;
  background-color: rgb(232, 28, 62);
`

export const EditButton = styled.button`
  width: 100px;
  height: 25px;
  font-weight: bold;
  margin: 8px 0 8px auto;
  border: 2px solid grey;
  border-radius: 4px;
  background-color: rgb(91, 235, 156);
`

