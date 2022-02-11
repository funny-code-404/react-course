import React from 'react';
import { FormStyleComponent } from './styles';

// component
import Input from '../Input/Input';

import { NAMES } from './NAMES';

class Form extends React.Component {
  state = {
    values: {
      [NAMES.name]: '',
      [NAMES.email]: '',
      [NAMES.password]: '',
    },
  };

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value,
      },
    }));
    console.log(`${e.target.name}:${e.target.value}`); // del
  };

  render() {
    const { values } = this.state;

    return (
      <FormStyleComponent>
        <label htmlFor={NAMES.name}>NAME:</label>
        <Input
          type={NAMES.text}
          id={NAMES.name}
          name={NAMES.name}
          value={values.name}
          onChange={this.handleChange}
        />
        <label htmlFor={NAMES.email}>EMAIL:</label>
        <Input
          type={NAMES.email}
          id={NAMES.email}
          name={NAMES.email}
          value={values.email}
          onChange={this.handleChange}
        />
        <label htmlFor={NAMES.password}>PASSWORD:</label>
        <Input
          type={NAMES.password}
          id={NAMES.password}
          name={NAMES.password}
          value={values.password}
          onChange={this.handleChange}
        />
      </FormStyleComponent>
    );
  }
}

export default Form;
