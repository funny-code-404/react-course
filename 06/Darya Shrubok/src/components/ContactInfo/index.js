import React from "react";
import { Link } from "react-router-dom";

class ContactInfo extends React.Component {
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
      (item) => item.name === match.params.name
    );
    return (
      <div>
        <h1>Name: {match.params.name}</h1>
        <h2>Friends' phones: </h2>
        <nav className="contacts_navigation">
          {currentContact.friends.map((item, i) => {
            return (
              <Link
                key={i}
                to={{
                  pathname: `/names/${item.name}/${item.phone}`,
                  state: {
                    data: state.data,
                  },
                }}
              >
                {item.phone}
              </Link>
            );
          })}
        </nav>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ContactInfo;
