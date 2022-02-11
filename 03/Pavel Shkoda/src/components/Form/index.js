import React from 'react';
import Input from '../Input';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeByn = this.handleChangeByn.bind(this);
    this.handleChangeUsd = this.handleChangeUsd.bind(this);
    this.handleChangeEur = this.handleChangeEur.bind(this);
    this.handleChangePln = this.handleChangePln.bind(this);
    this.state = { cash: '', unit: '', by: '', eu: '', us: '', pl: '' };
  }

  handleChangeByn(cash) {
    this.setState({ unit: 'BYN', cash: cash, by: 1, eu: 0.3391, us: 0.3803, pl: 1.553 });
  }
  handleChangeUsd(cash) {
    this.setState({ unit: 'USD', cash: cash, by: 2.629, eu: 0.891, us: 1, pl: 4.082 });
  }
  handleChangeEur(cash) {
    this.setState({ unit: 'EUR', cash: cash, by: 2.948, eu: 1, us: 1.121, pl: 4.577 });
  }
  handleChangePln(cash) {
    this.setState({ unit: 'PLN', cash: cash, by: 0.644, eu: 0.2184, us: 0.2449, pl: 1 });
  }

  render() {
    const { cash, unit, by, pl, eu, us } = this.state

    const byn = unit === 'BYN' ? Math.round(cash * 100) / 100 : Math.round(cash * by * 100) / 100;
    const eur = unit === 'EUR' ? Math.round(cash * 100) / 100 : Math.round(cash * eu * 100) / 100;
    const pln = unit === 'PLN' ? Math.round(cash * 100) / 100 : Math.round(cash * pl * 100) / 100;
    const usd = unit === 'USD' ? Math.round(cash * 100) / 100 : Math.round(cash * us * 100) / 100;

    return (
      <div>
        <Input unit='BYN' cash={byn} onChangeСash={this.handleChangeByn} />
        <Input unit='USD' cash={usd} onChangeСash={this.handleChangeUsd} />
        <Input unit='EUR' cash={eur} onChangeСash={this.handleChangeEur} />
        <Input unit='PLN' cash={pln} onChangeСash={this.handleChangePln} />
      </div>
    );
  }
}
export default Form;