import React from "react";

import phoneBook from "../constants";

class NamePage extends React.Component {
  handleBackClick = () => {
    const { history } = this.props;

    history.goBack();
  };

  handleFriendClick = (e) => {
    const { history } = this.props;
    history.push(`/${e.target.innerText}`);
  };

  render() {
    const { param } = this.props.match.params;
    const personByName = phoneBook.find((item) => {
      return item.name === param;
    });
    const personByNumber = phoneBook.find((item) => {
      return item.number === param;
    });

    return (
      <>
        <h1>
          {personByName !== undefined
            ? `${personByName.name}'s`
            : `${personByNumber.number}'s`}{" "}
          Card
        </h1>
        <p>
          Name:{" "}
          {personByName !== undefined ? personByName.name : personByNumber.name}
        </p>
        <p>
          Number:{" "}
          {personByName !== undefined
            ? personByName.number
            : personByNumber.number}
        </p>
        <p>
          Friends:{" "}
          <span onClick={this.handleFriendClick}>
            {phoneBook[Math.round(Math.random() * 9)].name}
          </span>
          <span onClick={this.handleFriendClick}>
            {phoneBook[Math.round(Math.random() * 9)].name}
          </span>
        </p>
        <p onClick={this.handleBackClick}>Go back</p>
      </>
    );
  }
}

export default NamePage;
