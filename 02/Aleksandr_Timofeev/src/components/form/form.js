import React from 'react';
import './styles.css';

class Form extends React.Component {
  state ={
    card:{},
    data:{
      name:'',
      email:'',
      password:'',
    }
  }


  handleClick = (e) => {
    e.preventDefault();
    this.setState(
      {
      card:{
        cardName : this.state.data.name,
        cardEmail : this.state.data.email,
        cardPassword : this.state.data.password
      },
      data:{
        name:'',
        email:'',
        password:''
      }}
    )
    console.log(this.state.data);
  }


  handleChange = (e) => {
    this.setState(prevState =>
      ({data:
        {
          ...prevState.data,
          [e.target.name] : e.target.value
        }})
    )
  };

  render(){
    const {data:{
      name,
      email,
      password,
    }} = this.state;
    const {card:{
      cardName,
      cardEmail,
      cardPassword,
    }} = this.state;

    return (
      <div className="wrapper">
        <form className="form">
          <label htmlFor="formName">
            <input typeof="text" placeholder="name" id="formName" name="name"
            value={name} onInput={this.handleChange}/>
          </label>
          <label htmlFor="formEmail">
            <input typeof="email" placeholder="email" id="formEmail" name="email"
            value={email} onInput={this.handleChange}/>
          </label>
          <label htmlFor="formPassword">
            <input typeof="password" placeholder="password" id="formPassword" name="password"
            value={password} onInput={this.handleChange}/>
          </label>
          <button onClick={this.handleClick}>SEND</button>
        </form>
        <div className="card">
          <div className="card-item">Name - <span>{cardName}</span></div>
          <div className="card-item">Email - <span>{cardEmail}</span></div>
          <div className="card-item">Password - <span>{cardPassword}</span></div>
        </div>
      </div>
    )
  }
}

export default Form;
