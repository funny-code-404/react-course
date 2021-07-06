import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as data from './componrnts/data/data';
import style from 'styled-components';
import Contact from './componrnts/contact/index';
import Number from './componrnts/number';
import Calls from './componrnts/calls/index';
import Friend from './componrnts/friend/index';

const Container = style.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  margin: 20px;
  border: 1px black solid;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Lago = style.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Nav = style.div`
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = style.div`
  display: flex;
  flex-direction: column;
`;

const A = style(Link)`
  margin-bottom: 10px;
`;


class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Lago>
          <div>Имя</div>
          <div>Номер телефона</div>
          </Lago>
          <Nav>
            <LinkContainer>
              {data.friends.map((item) => <A to={{pathname: `/contact/${item.name}`}}>{item.name}</A>)}
            </LinkContainer>
            <LinkContainer>
              {data.friends.map((item) => <A to={{pathname: `/number/${item.phone}`}}>{item.phone}</A>)}
            </LinkContainer>
          </Nav>
        </Container>
        <Switch>
          <Route path='/contact/:name' exact component={Contact} />
          <Route path='/contact/:name/:friend' exact component={Friend} />
          <Route path='/number/:number' component={Number} />
          <Route path='/calls/:name' component={Calls} />
        </Switch>
      </Router>
    )
  }
}
   

export default App;

