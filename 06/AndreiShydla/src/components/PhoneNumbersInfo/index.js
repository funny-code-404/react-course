import React from "react";
import { Link } from "react-router-dom";

class PhoneNumbersInfo extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { match } = this.props;
    const {
      currentId,
      currentName,
      baseFriends,
      phoneBook,
    } = this.props.location.state;

    const friendListItem = (id, base) => {
      const result = base.filter((item) => item.id === id);
      return {
        id: result[0].id,
        name: result[0].name,
        phoneNumber: result[0].phoneNumber,
      };
    };

    const friendList = (idArray, phoneBook) => {
      return idArray.map((item) => {
        return friendListItem(item, phoneBook);
      });
    };

    const currentFriendList = (currentId, baseFriends, phoneBook) => {
      const result = baseFriends.filter((item) => item.id === currentId);
      const idArray = result[0].friends;
      return friendList(idArray, phoneBook);
    };

    const friends = currentFriendList(currentId, baseFriends, phoneBook);
    // console.log(friends);

    const renderItems = friends.map((item) => (
      <li key={`${Number(item.id) + 1}`}>
        {
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
        }
      </li>
    ));

    return (
      <div>
        <h3>{match.params.phoneNumber}</h3>
        <h4>Name</h4>
        <p>{`${currentName[0].toUpperCase() + currentName.slice(1)}`}</p>
        <h4>List of friends:</h4>
        <ul>{renderItems}</ul>
        <button onClick={this.handleClick} className="button-back">
          <div className="button-arrow"></div>
          <p className="button-text">Back</p>
        </button>
      </div>
    );
  }
}

export default PhoneNumbersInfo;
