import React from "react";
import BlockForm from "../BlockForm";
import BlockData from "../BlockData";

class App1 extends React.Component {
  state = {
    base: [{}],
    lastEnteredUserId: "",
    lastEnteredUserName: "",
    lastEnteredUserEmail: "",
    lastEnteredUserPassword: "",
  };

  passDataToApp1 = async (user) => {
    await this.addUserToDataBase(user);
  };

  addUserToDataBase = async (user) => {
    const newDataBase = this.state.base[0];

    const userId = Object.keys(user)[0];
    const userData = user[userId];
    newDataBase[userId] = userData;

    const newBase = [];
    newBase[0] = newDataBase;

    const { name, email, password } = userData;

    await this.setState((prevState) => ({
      ...prevState,

      base: newBase,
      lastEnteredUserId: userId,
      lastEnteredUserName: name,
      lastEnteredUserEmail: email,
      lastEnteredUserPassword: password,
    }));
  };

  render() {
    const {
      base,
      lastEnteredUserId,
      lastEnteredUserName,
      lastEnteredUserEmail,
      lastEnteredUserPassword,
    } = this.state;
    return (
      <>
        <BlockForm functions={{ passDataToApp1: this.passDataToApp1 }} />
        <BlockData
          data={{
            base: base,
            lastEnteredUserId: lastEnteredUserId,
            lastEnteredUserName: lastEnteredUserName,
            lastEnteredUserEmail: lastEnteredUserEmail,
            lastEnteredUserPassword: lastEnteredUserPassword,
          }}
        />
      </>
    );
  }
}

export default App1;
