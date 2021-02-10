import React from 'react';
import { Component } from 'react'

import './form.css' 

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: '',
        password: '',
        email: '',
        city: '',
        comment: '',
      },
      checkboxes: {
        trial: false,
        subscribe: false,
        terms: false,
      },
    }

  }

handleChange = (event) => {
  const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState, 
        info: {
          ...prevState.info,
          [name]: value
        },
    }));
};

handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    this.setState((prevState) => ({
        ...prevState,
        checkboxes: {
        ...prevState.checkboxes,
        [name]: checked
        },
    }));
};

handleClick = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
};

render() {

    const { email, password, name, trial, subscribe, terms, city, comment } = this.state;

    return (
      <form> 
          <input name='name' value={name} placeholder='Name' onChange={this.handleChange}></input>
          <input name='password' type="password" value={password} placeholder='Password' onChange={this.handleChange}></input>
          <input name='email' value={email} placeholder='E-mail' onChange={this.handleChange}></input>

        <select name='city' value = {city} onChange={this.handleChange}>
          <option selected disabled>City</option>
          <option value = 'Minsk'>Minsk</option>
          <option value = 'Brest'>Brest</option>
          <option value = 'Grodno'>Grodno</option>
        </select>

        <label>Trial</label>
        <input className = "checkbox" type='checkbox' name='trial' checked={trial} onChange={this.handleCheckboxChange}></input>

        <label>Subscribe</label>
        <input className = "checkbox" type='checkbox' name='subscribe' checked={subscribe} onChange={this.handleCheckboxChange}></input>

        <label>Terms</label>
        <input className = "checkbox" type='checkbox' name='terms' checked={terms} onChange={this.handleCheckboxChange}></input>

        <textarea name = 'comment' placeholder='Please, write Your comment here' value = {comment} onChange={this.handleChange}/>
        
        <button onClick={this.handleClick}>Submit</button>
        <button type='reset'>Reset</button>
      </form>
    )};
}

export default Form;
