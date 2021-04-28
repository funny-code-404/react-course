import { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import Contacts from './components/contacts'
import User from './components/user'
import Home from './components/home'
import Info from './components/info'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`

const Navigation = styled.nav`
  display: flex;
    a{
      padding: 6px 24px;
      text-decoration: none;
      color: black;
      font-size: 2rem;
      background: teal;
      margin: 0 12px;
      border-radius: 6px;
    }
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Navigation>
          <Link to='/home'>Home</Link>
          <Link to='/contacts'>Contacts</Link>
          <Link to='/info'>Info</Link>
        </Navigation>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/contacts/' exact component={Contacts} />
          <Route path='/contacts/:id' exact component={User} />
          <Route path='/info' exact component={Info} />
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default App;
