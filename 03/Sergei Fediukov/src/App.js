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

  handleChange = (e) => {
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
            [name]: `Warning ${name} is too long`
          }
        }));
        console.log(e.target.previousSibling)
        e.target.previousSibling.textContent = `***(Warning: ${name} is too long)***`
        e.target.previousSibling.classList.add('error')
      }
      else {
        e.target.previousSibling.textContent = name.slice(0, 1).toUpperCase().concat(name.slice(1))
        e.target.previousSibling.classList.remove('error')
      }
    })
  }

  handleCheckBoxChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: !prevState[name]
      }
    }))
  }
  handleRadioBoxChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: e.target.value
      }
    }))
  }

  handleClick = (e) => {
    e.preventDefault();
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
                  <input
                    name='name'
                    placeholder='enter you name'
                    onChange={this.handleChange} />
                </label>
                <label>
                  <span> Password</span>
                  <input
                    name='password'
                    placeholder='enter you pass'
                    onChange={this.handleChange} />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    name='email'
                    placeholder='enter you email'
                    onChange={this.handleChange} />
                </label>
              </div>
              <div className='main_info-select'>
                <label> <span>City</span>
                  <select
                    name='city'
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}></textarea>
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
                  Quantity: {this.state.values.quantity}
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
            <button onClick={this.handleClick}>Send</button>
            <button type=''>Reset</button>
          </fieldset>
        </form>
      </div >
    );
  }
}
export default App;
