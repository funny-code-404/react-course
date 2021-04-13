import React from 'react';
import './style.css';

import Form from './Components/Form'

class App extends React.Component {
  render() {
    return (
      <>
        <Form formTitle="Регистрация" buttonTitle="Зарегистрироваться"/>
      </>
    )
  }
}

export default App;