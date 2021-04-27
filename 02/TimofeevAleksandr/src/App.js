import React from 'react';
import DataUser from './components/dataUser';
import Form from './components/form';


class App extends React.Component {
  state = {
    name : '',
    email : '',
    password : '',
  }

  getDataForm = (data) => {
    this.setState(prevState => ({
      ...prevState,
      name : data.name,
      email : data.email,
      password : data.password,
    }))
  }
  render(){
    const { name, email, password } = this.state
  return (
    <div className="App">
      <Form getDataForm={this.getDataForm}/>
      <DataUser dataForm={{name, email, password}}/>
    </div>
  )}
}

export default App;
