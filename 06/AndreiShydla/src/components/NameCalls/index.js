import React from "react";
import { Link } from "react-router-dom";

class NameCalls extends React.Component {
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

    const callsListItem = (id, phoneBook) => {
      const result = phoneBook.filter((item) => item.id === id);
      return {
        id: result[0].id,
        name: result[0].name,
        phoneNumber: result[0].phoneNumber,
      };
    };

    const callsList = (idArray, phoneBook) => {
      return idArray.map((item) => {
        return callsListItem(item, phoneBook);
      });
    };

    const currentCallsList = (currentId, baseCalls, phoneBook) => {
      const result = baseCalls.filter((item) => item.id === currentId);
      const idArray = result[0].calls;
      return callsList(idArray, phoneBook);
    };

    const calls = currentCallsList(currentId, baseCalls, phoneBook);
    // console.log(calls);

    const renderItems = calls.map((item, index) => (
      <li key={`${Number(item.id) + index}`}>
        {
          <Link
            to={{
              pathname: `/names/${item.name}/calls`,
              state: {
                currentId: item.id,
                currentPhoneNumber: item.phoneNumber,
                phoneBook: phoneBook,
                baseFriends: baseFriends,
                baseCalls: baseCalls,
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
        <h3>{currentPhoneNumber}</h3>
        <h4>Name</h4>
        <p>
          {`${match.params.name[0].toUpperCase() + match.params.name.slice(1)}`}
        </p>
        <h4>List of 5 last calls:</h4>
        <ul>{renderItems}</ul>
        <button onClick={this.handleClick} className="button-back">
          <div className="button-arrow"></div>
          <p className="button-text">Back</p>
        </button>
      </div>
    );
  }
}

export default NameCalls;
