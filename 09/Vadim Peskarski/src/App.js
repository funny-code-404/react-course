import React from 'react';
import Form from './components/Form/Form.js';
import Register from './components/Register/Register.js';
import LogIn from './components/LogIn/LogIn.js';
import FormFooter from './components/FormFooter/FormFooter.js';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';

const dataObj = {
  Register: <Register />,
  LogIn: <LogIn />,
  DeleteAccount: <DeleteAccount />
}

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Form renderData={dataObj.DeleteAccount} render={data => (
            <FormFooter data={data} />
          )} />
          {/* <Form renderData={dataObj.LogIn} render={data => (
          <FormFooter data={data} />
        )}/>
        <Form renderData={dataObj.Register} render={data => (
          <FormFooter data={data} />
        )}/> */}
        </div>
    )
  }
}

export default App;
