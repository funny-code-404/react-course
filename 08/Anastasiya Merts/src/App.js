import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { Home, Car, Navigation, Error} from './components'
import DataContextProvider from './context/DataContextProvider';

function App() {
  console.log("App");
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <DataContextProvider>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/:id" exact={true} component={Car}/>   
            {/* <Route component={Error} /> */}  {/*эта попытка отловить ошибку не сработала */}
          </DataContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
