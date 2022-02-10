import { Link, useLocation } from 'react-router-dom';

import { contacts } from '../ContactsPage/contacts';

function Friends({ friends }) {
  let { state } = useLocation();
  console.log(state);
  return (
    <>
      <div>
        {friends.map((id) =>
          contacts.map(
            (contact) =>
              id === contact.id &&
              (state ? (
                <div key={id}>
                  <Link
                    to={{
                      pathname: `/info/${id}`,
                      state: 'name',
                    }}
                  >
                    {contact.name}
                  </Link>
                </div>
              ) : (
                <div key={id}>
                  <Link to={`/info/${id}`}>{contact.phoneNumber}</Link>
                </div>
              ))
          )
        )}
      </div>
    </>
  );
}

export default Friends;
