import React from "react";
import { Link } from "react-router-dom";

class Contacts extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Pit",
        phone: "111111111",
        friends: [
          { name: "Sara", phone: "222222222" },
          { name: "Ann", phone: "333333333" },
        ],
        calls: [
          "222222222",
          "222222222",
          "333333333",
          "333333333",
          "333333333",
        ],
      },
      {
        id: 2,
        name: "Sara",
        phone: "222222222",
        friends: [
          { name: "Pit", phone: "111111111" },
          { name: "Ann", phone: "333333333" },
        ],
        calls: [
          "333333333",
          "111111111",
          "111111111",
          "333333333",
          "333333333",
        ],
      },
      {
        id: 3,
        name: "Ann",
        phone: "333333333",
        friends: [
          { name: "Pit", phone: "111111111" },
          { name: "Sara", phone: "222222222" },
        ],
        calls: [
          "222222222",
          "111111111",
          "111111111",
          "222222222",
          "222222222",
        ],
      },
    ],
  };
  render() {
    const { match } = this.props;
    const { data } = this.state;
    return (
      <div>
        <h1>Contacts</h1>
        <nav className="contacts_navigation">
          {match.params.type === "names"
            ? data.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={{
                      pathname: `/names/${item.name}`,
                      state: {
                        data: data,
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })
            : data.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={{
                      pathname: `/phones/${item.name}/${item.phone}`,
                      state: {
                        data: data,
                      },
                    }}
                  >
                    {item.phone}
                  </Link>
                );
              })}
        </nav>
      </div>
    );
  }
}

export default Contacts;
