import React from 'react';

import './styles.css';

class Footer extends React.Component {

  render() {
    return (
      <footer className = 'footer'>
        <div>
          <p>Phone: 364-67-47</p>
          <p>E-mail: yoga@gmail.com</p>
        </div>
        <div>
          <p>Project creator: Anite Mur</p>
          <p>Belarus, Minsk, 2010-2021</p>
        </div>
      </footer>
    );
  }
}

export default Footer;