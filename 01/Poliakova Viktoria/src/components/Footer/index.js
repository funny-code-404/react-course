import React from 'react';
import './style.scss';

const arr = ['Home', 'About us', 'Services', 'Portfolio', 'Blog', 'Contact us'];

class Footer extends React.Component {
  render() {
    return (
    <footer className='footer-content'>
      <div className='footer-list'>
        <ul>
          {arr.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
      <div className='footer-text'>
        <p>Designed By Developers Paradise</p>
      </div>
    </footer>
    )
  }
}


export default Footer;