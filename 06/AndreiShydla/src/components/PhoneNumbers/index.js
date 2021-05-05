import React from "react";
import { Link } from "react-router-dom";

class PhoneNumbers extends React.Component {
  render() {
    const { baseFriends, phoneBook } = this.props.location.state;

    const renderItems = phoneBook.map((item) => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/phoneNumbers/${item.phoneNumber}`,
            state: {
              currentId: item.id,
              currentName: item.name,
              phoneBook: phoneBook,
              baseFriends: baseFriends,
            },
          }}
        >
          {item.phoneNumber}
        </Link>
      </li>
    ));

    return <ul className="list-items">{renderItems}</ul>;
  }
}

export default PhoneNumbers;
