import React from 'react';

class Contacts extends React.Component{

  handleClick = (e) => {
    this.props.history.push(`/contacts/${e.target.id}`)
  }

  position = (e) => {
    this.props.history.push(`/contacts/${e.clientX}.${e.clientY}`)
    console.log(e.clientX);
  }

  render(){


    return(
    <>
      <div className="info">
        <h1>Contacts</h1>
        <div className="wrapper-map" onClick={this.position}></div>
      </div>
    </>
    )
  }
}

export default Contacts
