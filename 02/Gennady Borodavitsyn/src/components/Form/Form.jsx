import React from 'react'

const NAMES = {
  name: 'name',
}

class Form extends React.Component {
  state = {
    values: {
      [NAMES.name]: '',
      email: '',
    },
    errors: {
      name: '',
      email: '',
    },
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState((prevState) => ({
  //     errors: {
  //       [e.target.name]: e.target.value,
  //     },
  //   }))
  // }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value,
      },
    }))
  }

  render() {
    const { email } = this.state
    return (
      <form action="" className="form" onSubmit={this.handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          {this.state.errors.email && <div>Error!</div>}
        </label>
        <label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={NAMES.name}
            onChange={this.handleChange}
          />
          {this.state.errors.name && <div>Error!</div>}
        </label>
        <button>Send data</button>
      </form>
    )
  }
}
export default Form
