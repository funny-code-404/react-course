import React from 'react';
import './App.scss';
import FormBase from './Component/FormBase/FormBase';
import FormRegister from './Component/FormRegister/FormRegister';
import FormLogIn from './Component/FormLogIn/FormLogIn';
import FormDeleteAcc from './Component/FormDeleteAcc/FormDeleteAcc';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';


function App() {

  return (
    <Router>
      <DivStyled>
        <Header/>
        <Switch>
          <Route exact path = '/'/>
          <Route path = '/register'>
            <FormBase>
              <FormRegister/>
            </FormBase>
          </Route>
          <Route path = '/login'>
            <FormBase>
              <FormLogIn/>
            </FormBase> 
          </Route>
          <Route path = '/deleteacc'>
            <FormBase>
              <FormDeleteAcc/>
            </FormBase>
          </Route>
        </Switch>
      </DivStyled>
    </Router>
  );
}

export default App;

const DivStyled = styled.div`
max-width: 400px;
margin: 0 auto;

`