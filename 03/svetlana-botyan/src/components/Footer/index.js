import React from 'react';

import Popup from '../Popup';

class Footer extends React.Component {
  state = {
    data: '',
  };

  updateData = (value) =>
    this.setState({
      data: value,
    });

  render() {
    const { data } = this.state;

    return (
      <div>
        <p>{data}</p>
        <Popup text='POPUP' updateData={this.updateData} />
      </div>
    );
  }
}

export default Footer;
