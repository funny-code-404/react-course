import React from 'react';
import './style.scss';

const arr = ['home', 'about us', 'services', 'portfolio', 'blog', 'contact us'];


class Header extends React.Component {
  render() {
    return (
    <header className='header-main'>
        <p className='lago-name'>business <span>name</span></p>
        <p className='lago-text'>we are the company you can trust</p>
      <div className='header-menu'>
          {
            arr.map((item, i) => {
              return <button key={i}>{item}</button>
            })
          }
      </div>
    </header>
    )
  }
}


export default Header;