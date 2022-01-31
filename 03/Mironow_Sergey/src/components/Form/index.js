import React from 'react';
import Input from '../Input';

class Form extends React.Component {
  state = {
    values: {
      i1: '',
      i2: '',
    },
  };

  card = {
    title: this.state.values.i1,
    text: this.state.values.i2,
  }


  returnValue = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.name]: event.target.value
      }
    }))
  }

  handleChange = (event) => {
    this.returnValue(event)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitCard({title: this.state.values.i1, text: this.state.values.i2,})
  }

  render() {
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Title:</p>
        <Input name ='i1' value = {values['i1']} onChange={this.handleChange} />
        <p>Text:</p>
        <Input name ='i2' value = {values['i2']} onChange={this.handleChange} />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form