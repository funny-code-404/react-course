import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import RegForm from './components/Form/regForm'

class App extends React.Component {

  render() {
    const { names, email, password, secname, birth, telephone } = this.props;

    return (
      <div className='App'>
        <div id='myForm'>
          <form>
              <Form />
              <RegForm /> 
              {/* В зависимости от потребности в той или иной форме, я так вижу ее мутацию (через добавления компонента RegForm) */}
              <button>Click</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => {
  console.log('form', form)
  return {
    names: form.names,
    email: form.email,
    password: form.password,
    secname: form.secname,
    birth: form.birth,
    telephone: form.telephone,
  };
};

export default connect(mapStateToProps)(App);
