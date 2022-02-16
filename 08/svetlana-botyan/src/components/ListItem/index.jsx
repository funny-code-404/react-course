import React from 'react';

const ListItem = ({ id, content, index, onClick }) => {
  return (
    <li>
      <p>{index + 1}</p>
      <p>{content}</p>
      <button id={id} onClick={onClick}>
        delete
      </button>
    </li>
  );
};

export default React.memo(ListItem);
