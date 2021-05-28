import React from "react";

import { Link } from "react-router-dom";

class CarsList extends React.Component {
  render() {
    const { data } = this.props;

    const renderItems = data.map((item) => (
      <li key={`${String(item.id)}000`} className="cars-list-item">
        {
          <Link
            to={{
              pathname: `/cars-list/${item.id}`,
            }}
            className="cars-list-item-link"
          >
            {`${item.make}-${item.model}`}
          </Link>
        }
      </li>
    ));

    return (
      <>
        <h2>Cars list</h2>
        <ul>{renderItems}</ul>
      </>
    );
  }
}

export default CarsList;
