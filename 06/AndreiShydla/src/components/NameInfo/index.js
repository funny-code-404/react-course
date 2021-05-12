import React from "react";
import { Link } from "react-router-dom";

class NameInfo extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { match } = this.props;
    const {
      currentId,
      currentPhoneNumber,
      baseFriends,
      phoneBook,
      baseCalls,
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
        }
      </li>
    ));

    return (
      <div>
        <h3>
          {`${match.params.name[0].toUpperCase() + match.params.name.slice(1)}`}
        </h3>
        <h4>Phone number</h4>

        <Link
          to={{
            pathname: `/names/${match.params.name}/calls`,
            state: {
              currentId: currentId,
              currentPhoneNumber: currentPhoneNumber,
              phoneBook: phoneBook,
              baseFriends: baseFriends,
              baseCalls: baseCalls,
            },
          }}
        >
          {currentPhoneNumber}
        </Link>

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

export default NameInfo;
