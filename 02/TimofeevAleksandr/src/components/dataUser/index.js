import React from 'react'
import './style.css'

class DataUser extends React.Component {
  state = {
  }

  render(){
  const { name, email, password } = this.props.dataForm
    return(
      <div className='dataUser'>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
        <p>Password - {password}</p>
      </div>
    )
  }
}

export default DataUser
