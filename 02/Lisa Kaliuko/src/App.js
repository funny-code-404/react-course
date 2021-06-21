import React from 'react';

import './styles.css';

const NAME_KEY = 'name';
const PASSWORD_KEY = 'password';
const EMAIL_KEY = 'email';

const requiredMessage = 'This field is required';
const nameLengthMessage = 'Name must be longer than 3 and shorter than 30';
const nameCapitalLetterMessage = 'Name must start in a capital letter';
const passwordLengthMessage = 'Password must be longer than 8';
const passwordSymbolsMessage = 'Password must include letters and numbers';
const emailSymbolsMessage = 'E-mail must include symbol @ and .';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      values: {
        [NAME_KEY]: '',
        [PASSWORD_KEY]: '',
        [EMAIL_KEY]: '',
      },
      isEmpty: {
        [NAME_KEY]: true,
        [PASSWORD_KEY]: true,
        [EMAIL_KEY]: true,
      },
     };
  }

  handleChange = (e) => {
    const key = e.target.name;
    const inputValue = e.target.value;

    const values = {...this.state.values};
    const isEmpty = {...this.state.isEmpty};
    
    values[key] = inputValue;
    if(values[key] !== '') {
      isEmpty[key] = false;
    } else {
      isEmpty[key] = true;
    }
    
    this.setState({ values, isEmpty });
  } 

  handleClick = (e) => {
    e.preventDefault();

    const {...inputs} = this.state.values;

    console.log({
      [NAME_KEY]: inputs[NAME_KEY],
      [PASSWORD_KEY]: inputs[PASSWORD_KEY],
      [EMAIL_KEY]: inputs[EMAIL_KEY],
    });
  }

  render() {
    const {...inputs} = this.state.values;
    const {...isEmptyInputs} = this.state.isEmpty;

    return (
      <form className='form'>
        <input placeholder='Name' name={NAME_KEY} value={inputs[NAME_KEY]} onChange={this.handleChange} />
        {isEmptyInputs[NAME_KEY] && <p className='warning'>{requiredMessage}</p>}
        {(inputs[NAME_KEY].length < 3 || inputs[NAME_KEY].length > 30) && <p className='warning'>{nameLengthMessage}</p>}
        {inputs[NAME_KEY].codePointAt(0) > 90 && <p className='warning'>{nameCapitalLetterMessage}</p>}
        
        <input placeholder='Password' name={PASSWORD_KEY} value={inputs[PASSWORD_KEY]} onChange={this.handleChange} />
        {isEmptyInputs[PASSWORD_KEY] && <p className='warning'>{requiredMessage}</p>}
        {inputs[PASSWORD_KEY].length < 8 && <p className='warning'>{passwordLengthMessage}</p>}
        {( !(/[0-9]/.test(inputs[PASSWORD_KEY])) || !(/[a-z]/.test(inputs[PASSWORD_KEY].toLowerCase())) ) && <p className='warning'>{passwordSymbolsMessage}</p> }

        <input placeholder='E-mail' name={EMAIL_KEY} value={inputs[EMAIL_KEY]} onChange={this.handleChange} />
        {isEmptyInputs[EMAIL_KEY] && <p className='warning'>{requiredMessage}</p>}
        {(inputs[EMAIL_KEY].indexOf('@') === -1 || inputs[EMAIL_KEY].indexOf('.') === -1) && <p className='warning'>{emailSymbolsMessage}</p>}
        
        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}

export default App;
