import React from 'react';

const UNIT = {
  BYN: 'BYN',
  USD: 'USD',
  EUR: 'EUR',
  PLN: 'PLN',
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChangeСash(e.target.value)
  }

  render() {
    const  cash = this.props.cash
    const  unit = this.props.unit

    return (
      <p>
        <span>Валюта в "{UNIT[unit]}": </span>
        <input value={cash} onChange={this.onChange} />
      </p>
    );
  }
}

export default Input;
