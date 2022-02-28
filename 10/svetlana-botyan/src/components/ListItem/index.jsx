import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ content, pathname }) => {
  return (
    <li>
      <Link
        to={{
          pathname: pathname,
        }}
      >
        {content}
      </Link>
    </li>
  );
};

export default React.memo(ListItem);
