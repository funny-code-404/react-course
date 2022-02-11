import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

class Card extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any,
      data: PropTypes.func,
    };
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div className="container center">
        {data.map((post) => (
          <div className="card" key={post.id}>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
            <button>Next</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
