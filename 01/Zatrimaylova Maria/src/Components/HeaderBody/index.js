import React from 'react';
import './style.css';

class HeaderBody extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <header className="header__body">
        <div className="header__text">
          <h1 className="text__article">{title}</h1>
          <p className="text__content">{text}</p>
        </div>
        {this.props.children}
      </header>
    )
  }
}

export default HeaderBody;