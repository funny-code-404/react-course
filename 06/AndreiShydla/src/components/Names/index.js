import React from "react";
import { Link } from "react-router-dom";

class Names extends React.Component {
  render() {
    const { baseFriends, phoneBook, baseCalls } = this.props.location.state;

    const renderItems = phoneBook.map((item) => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/names/${item.name}`,
            state: {
              currentId: item.id,
              currentPhoneNumber: item.phoneNumber,
              phoneBook: phoneBook,
              baseFriends: baseFriends,
              baseCalls: baseCalls,
            },
          }}
        >
          {`${item.name[0].toUpperCase() + item.name.slice(1)}`}
        </Link>
      </li>
    ));

    return <ul className="list-items">{renderItems}</ul>;
  }
}

export default Names;
