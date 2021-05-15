import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';

import DataContextProvider from './components/context/DataContextProvider';
import CatsList from './components/CatsList/CatsList';
import CatsItem from './components/CatItem/CatsItem';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <DataContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={CatsList} />
            <Route path="/:id" exact component={CatsItem}/>
          </Switch>
        </Router>
      </DataContextProvider>      
    </>
  );
}

export default App;
