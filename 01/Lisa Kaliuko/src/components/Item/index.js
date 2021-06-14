import React from 'react';

import './styles.css';

class Item extends React.Component {

  render() {
    const {name, description} = this.props;
    
    return (
      <div className='item'>
        <p className='item-title'>{name}</p>
        <p className='item-descr'>{description}</p>
      </div>
    );
  }
}

export default Item;