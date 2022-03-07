import React from 'react';

const ListItem = ({
  id,
  index,
  userName,
  content,
  email,
  onClickRemove,
  onClickEdit,
}) => {
  return (
    <li>
      <p>{index + 1}</p>
      <p>
        User name: <span>{userName}</span>
      </p>
      <p>
        Review: <span>{content}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <button id={id} onClick={onClickRemove}>
        delete
      </button>
      <button id={id} onClick={onClickEdit}>
        edit
      </button>
    </li>
  );
};

export default React.memo(ListItem);
