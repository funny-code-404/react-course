import React from 'react';
import './styles.css';

class Paragraph extends React.Component {

  render() {
    const {title, text} = this.props;
    
    return (
      <>
        {title !== null && <h2>{title}</h2>}
        <p>{text}</p>
      </>
    );
  }
}

export default Paragraph;