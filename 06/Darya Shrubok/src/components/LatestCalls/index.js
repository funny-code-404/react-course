import React from "react";
import { Link } from "react-router-dom";

class LatestCalls extends React.Component {
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
        <h1>Latest calls:</h1>
        <nav className="contacts_navigation">
          {currentContact.calls.map((item, i) => {
            return (
              <Link
                key={i}
                to={{
                  pathname: `/names/${match.params.name}/${item}`,
                  state: {
                    data: state.data,
                  },
                }}
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default LatestCalls;
