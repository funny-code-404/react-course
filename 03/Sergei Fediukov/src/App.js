import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        name: '',
        password: '',
        email: '',
        city: '',
      },
      additionalValues: {
        trial: '',
        subscribe: '',
        terms: '',
        comment: '',
        gender: '',
        favourite_color: '',
        quantity: ''
      },
      errors: {
      }
    }
  }

  handleChangeValues = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: e.target.value
      }
    }), () => {
      if (this.state.values[name].length > '10') {
        this.setState(prevState => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [name]: `*Warning ${name} is too long*`
          }
        }));
      }
      else {
        this.setState(prevState => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            [name]: ''
          }
        }));
      }
    })
  }
  handleChangeAddValues = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      additionalValues: {
        ...prevState.additionalValues,
        [name]: e.target.value
      }
    }))
  }
  handleCheckBoxChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      additionalValues: {
        ...prevState.additionalValues,
        [name]: !prevState[name]
      }
    }))
  }
  handleRadioBoxChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      additionalValues: {
        ...prevState.additionalValues,
        [name]: e.target.value
      }
    }))
  }

  handleClick = (e) => {
    // e.preventDefault();
    console.log(JSON.stringify(this.state));
  }
  render() {
    return (
      <div className='App' >
        <form>
          <fieldset>
            <legend>Fill the form</legend>
            <fieldset className='main_info'>
              <legend>Main info</legend>
              <div className='main_info-inputs'>
                <label> <span>Name</span>
                  {this.state.errors.name ? <span className="error">{this.state.errors.name}</span> : ''}
                  <input
                    name='name'
                    placeholder='enter you name'
                    onChange={this.handleChangeValues} />
                </label>
                <label>
                  <span> Password</span>
                  {this.state.errors.password ? <span className="error">{this.state.errors.password}</span> : ''}
                  <input
                    name='password'
                    placeholder='enter you pass'
                    onChange={this.handleChangeValues} />
                </label>
                <label>
                  <span>Email</span>
                  {this.state.errors.email ? <span className="error">{this.state.errors.email}</span> : ''}
                  <input
                    name='email'
                    placeholder='enter you email'
                    onChange={this.handleChangeValues} />
                </label>
              </div>
              <div className='main_info-select'>
                <label> <span>City</span>
                  <select
                    name='city'
                    onChange={this.handleChangeValues}
                    defaultValue='select you city'>
                    <option disabled>select you city</option>
                    <option value='Минск'>Минск</option>
                    <option value='Гомель'>Гомель</option>
                    <option value='Витебск'>Витебск</option>
                  </select>
                </label>
              </div>
            </fieldset>
            <fieldset className='more_info'>
              <legend>More info</legend>
              <div className='more_info-inputs'>
                <label>
                  Trial
                  <input
                    type='checkbox'
                    name='trial'
                    onChange={this.handleCheckBoxChange} />
                </label>
                <label>
                  Subscribe
                   <input type='checkbox'
                    name='subscribe'
                    onChange={this.handleCheckBoxChange} />
                </label>
                <label>
                  Terms and conditions
                  <input type='checkbox'
                    name='terms'
                    onChange={this.handleCheckBoxChange} />
                </label>
              </div>
              <div className='main_info-select'>
                <label>
                  <span>Comment</span>
                  <textarea name='comment'
                    className='more_info-textarea'
                    placeholder='Any comment...'
                    onChange={this.handleChangeAddValues}></textarea>
                </label>
              </div>
            </fieldset>
            <fieldset className='unnecessary_info'>
              <legend>Unnecessary info</legend>
              <div className='more_info-inputs'>
                <div>
                  <label>
                    Male
                  <input
                      type='radio'
                      name='gender'
                      value='male'
                      onChange={this.handleRadioBoxChange} />
                  </label>
                  <label>
                    Female
                   <input type='radio'
                      name='gender'
                      value='female'
                      onChange={this.handleRadioBoxChange} />
                  </label>
                </div>
                <label>
                  Choose you favourite color:
                  <input name='favourite_color'
                    className='color_input'
                    type='color' onChange={this.handleRadioBoxChange}>
                  </input>
                </label>
              </div>
              <div className='main_info-select'>
                <label>
                  Quantity: {this.state.additionalValues.quantity}
                  <input className='range_input'
                    name='quantity'
                    type='range'
                    min='1'
                    max='10'
                    step='1'
                    onChange={this.handleRadioBoxChange}>
                  </input>
                </label>
              </div>
            </fieldset>
            <button onClick={console.log(JSON.stringify(this.state))}>Send</button>
            <button type=''>Reset</button>
          </fieldset>
        </form>
      </div >
    );
  }
}
export default App;
