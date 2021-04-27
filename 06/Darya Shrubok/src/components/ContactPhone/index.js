import React from "react";
import { Link } from "react-router-dom";

class ContactPhone extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const {
      location: { state },
    } = this.props;
    const { match } = this.props;
    const currentContact = state.data.find(
      (item) => item.phone === match.params.phone
    );
    return (
      <div>
        <h1>
          Phone:
          <Link
            to={{
              pathname: `/names/${currentContact.name}/${currentContact.phone}/calls`,
              state: {
                data: state.data,
              },
            }}
          >
            {match.params.phone}
          </Link>
        </h1>
        <h2>Friends' names: </h2>
        <nav className="contacts_navigation">
          {currentContact.friends.map((item, i) => {
            return (
              <Link
                key={i}
                to={{
                  pathname: `/names/${item.name}`,
                  state: {
                    data: state.data,
                  },
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ContactPhone;
