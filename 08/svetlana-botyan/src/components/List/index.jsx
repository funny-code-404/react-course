import { useContext } from 'react';
import { FormContext } from '../../context/context';
import ListItem from '../ListItem';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

export const List = () => {
  const { data, onClickDelete } = useContext(FormContext);
  return (
    <ul>
      {data.map(({ id, task }, index) => (
        <ListItem
          key={uuidv4()}
          index={index}
          id={id}
          content={task}
          onClick={onClickDelete}
        />
      ))}
    </ul>
  );
};
