import React from 'react';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        password: '',
        email: '',
        city: '',
        trial: false,
        subscribe: false,
        termsAndConditions: false,
        textArea: '',
      }
    }
  }

  handleChange = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      data : {
        ...prevState.data,
        [name]: e.target.value,
      }
    }));
  }

  handleCheckBoxChange = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({
      ...prevState,
      data : {
        ...prevState.data,
        [name] : !prevState[name],
      }
    }));
  }

  handelClick = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(this.state));
  }

  render () {
    return (
      <form className='m-auto'>
        <div className='d-flex justify-content-between part1 mb-3'>
          <div className="form-group">
            <input className='form-control' name='name' placeholder='name' onChange={this.handleChange}/>
            <input className='form-control' name='password' type="password" placeholder='password' onChange={this.handleChange}/>
            <input className='form-control' name='email' type="email" placeholder='email' onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <select className="form-control" name='city' placeholder='city' onChange={this.handleChange} defaultValue='City'>
              <option disabled>City</option>
              <option>Minsk</option>
              <option>Gomel</option>
              <option>Vitebsk</option>
              <option>Mogilev</option>
              <option>Grodno</option>
              <option>Brest</option>
            </select>
          </div>
        </div>

        <div className='d-flex justify-content-between part2'>
          <div className="form-group checkboxes pl-3 pt-2">
            <label className='d-block'>
              <input className='form-check-control' name='trial' type='checkbox' onChange={this.handleCheckBoxChange}/>
               <span> Trial</span>
            </label>
            <label className='d-block'>
              <input className='form-check-control' name='subscribe' type='checkbox' onChange={this.handleCheckBoxChange}/>
              <span> Subscribe</span>
            </label>
            <label className='d-block'>
              <input className='form-check-control' name='termsAndConditions' type='checkbox' onChange={this.handleCheckBoxChange}/>
              <span> Terms and conditions</span>
            </label>
          </div>

          <div className="form-group">
            <textarea className='form-control' name='textArea' placeholder='Any comment...' onChange={this.handleChange}>

            </textarea>
          </div>
        </div>
        
        <div className='twoBtn'>
          <button className="btn btn-warning mr-2" type='submit' onClick={this.handelClick}>Send</button>
          <button className="btn btn-light" type='reset'>Reset</button>
        </div>
      </form>
    );
  }
}

export default App;

