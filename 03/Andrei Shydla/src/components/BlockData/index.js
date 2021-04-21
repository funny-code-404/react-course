import React from "react";
import "./style.css";

class BlockData extends React.Component {
  handleOnClick = (event) => {
    // console.log(event);

    console.log(`onClicked element id: ${event.target.id}`);
  };

  render() {
    const dataBase = this.props.data.base[0];
    const renderCondition = Object.keys(dataBase).length === 0;
    let renderItems = [];

    if (!renderCondition) {
      const arrayDataBase = Object.entries(dataBase).map(
        ([userId, userData]) => {
          return {
            userId: userId,
            userData: `${userId}, data: ${JSON.stringify(userData)} `,
          };
        }
      );
      const {
        lastEnteredUserId,
        lastEnteredUserName,
        lastEnteredUserEmail,
        lastEnteredUserPassword,
      } = this.props.data;
      console.log(`last entered user -  id: ${lastEnteredUserId}, 
    name: ${lastEnteredUserName}, 
    email: ${lastEnteredUserEmail},
    password: ${lastEnteredUserPassword}.`);

      renderItems = arrayDataBase.map((item) => (
        <li
          key={item.userId}
          id={item.userId}
          onClick={this.handleOnClick}
          className="dataBaseItem"
        >
          {item.userData}
        </li>
      ));
    }

    return <div>{!renderCondition && <ul>{renderItems}</ul>}</div>;
  }
}

export default BlockData;
