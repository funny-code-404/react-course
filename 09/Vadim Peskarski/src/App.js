import React from 'react';
import Form from './components/Form/Form.js';
import Register from './components/Register/Register.js';
import LogIn from './components/LogIn/LogIn.js';
import FormFooter from './components/FormFooter/FormFooter.js';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';
import { Provider } from 'react-redux';
import store from './store/index.js';

const dataObj = {
  Register: <Register />,
  LogIn: <LogIn />,
  DeleteAccount: <DeleteAccount />
}

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App;
