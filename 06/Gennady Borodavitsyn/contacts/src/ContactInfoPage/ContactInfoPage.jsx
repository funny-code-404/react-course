import { useParams, useHistory, useLocation } from 'react-router-dom';

// component
import Friends from '../Friends/Friends';

import { contacts } from '../ContactsPage/contacts';

function ContactInfoPage() {
  const { id } = useParams();
  console.log(`user id: ${id}`);

  let contact = contacts.find((contact) => +contact.id === +id);

  let { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <>
      {/* <div>
        {state.name} {state.surName}
      </div>
      <div>{state.phoneNumber}</div> */}

      {state ? (
        <div>
          <div>
            name & surname: {contact.name} {contact.surName}
          </div>
          <div>phone number: {contact.phoneNumber}</div>
          <div>
            friends: <Friends friends={contact.friends} />
          </div>

          <button onClick={handleClick}>back</button>
        </div>
      ) : (
        <div>
          <div>name: {contact.name}</div>
          <div>
            friends: <Friends friends={contact.friends} />
          </div>

          <button onClick={handleClick}>back</button>
        </div>
      )}
    </>
  );
}

export default ContactInfoPage;
