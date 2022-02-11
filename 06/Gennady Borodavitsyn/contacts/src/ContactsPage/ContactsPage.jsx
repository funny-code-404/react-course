import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { contacts } from './contacts';

const Div = styled.div`
  width: 30%;
  margin: 0 auto;
`;

const Table = styled.table`
  border: black 1px solid;
`;

function ContactsPage() {
  return (
    <Div>
      <h4>Contacts:</h4>
      <Table>
        <thead>
          <tr>
            <th>Names</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {/* <Link to={`/info/${contact.id}`}>{contact.name}</Link> */}
                <Link
                  to={{
                    pathname: `/info/${contact.id}`,
                    state: 'name',
                  }}
                >
                  {contact.name}
                </Link>
              </td>
              <td>
                <Link to={`/info/${contact.id}`}>{contact.phoneNumber}</Link>
                {/* <Link
                  to={{
                    pathname: `/info/${contact.id}`,
                    state: '',
                  }}
                >
                  {contact.phoneNumber}
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
}

export default ContactsPage;
