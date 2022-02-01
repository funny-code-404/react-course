/* eslint-disable no-unused-vars */
import React from 'react';

import Input from '../Input';

const NAMES = {
  firstName: 'firstName',
  lastName: 'lastName',
  password: 'password',
  age: 'age'
}

class Form extends React.Component {
  state = {
    values: {
      [NAMES.firstName]: '',
      [NAMES.lastName]: '',
      [NAMES.password]: '',
      [NAMES.age]: ''
    },
  };

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value
      }
    }))

  };

  render() {
    const { values } = this.state;
    console.log(values)

    return (
      <form>
        {Object.entries(values).map(([name, value]) => (
          <label key={name} > {name}
            < Input name={name} value={value} onChange={this.handleChange} />
          </label>
        ))
        }
      </form>
    );
  }
}

export default Form;
