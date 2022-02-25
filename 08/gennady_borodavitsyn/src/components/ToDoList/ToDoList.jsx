import { useContext } from 'react';
import { FormContext } from '../../context/formContext/context';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    position: relative;
    border: 1px solid black;
    border-radius: 10px;
    width: 30%;
    margin: 0 auto;
  }

  button {
    position: absolute;
    border: 1px solid black;
    border-radius: 10px;
    top: 1px;
    right: 5px;
  }
`;

function ToDoList() {
  const { list, onDeleteClick } = useContext(FormContext);

  return (
    <>
      <h3>ToDo LIST:</h3>
      <Ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.body}
            <button onClick={() => onDeleteClick(todo.id)}>delete</button>
          </li>
        ))}
      </Ul>
    </>
  );
}

export default ToDoList;
