import { Switch, Route } from 'react-router-dom';

import { 
  Home, 
  Navigation,
  Civilizations,
  Civilization,
  Structures,
  Structure, 
  Technologies,
  Technology, 
  Units,
  Unit
} from './components';

import { 
  GlobalStyle, 
  Wrapper, 
  BodyWrapper 
} from './globalStyle';


function App() {
  
  return (
    <Wrapper>
      <GlobalStyle />
      <Navigation />
    <BodyWrapper>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/civilizations' component={Civilizations}/>
        <Route exact path='/civilizations/:civilizationType' component={Civilization}/>
        <Route exact path='/structures' component={Structures}/>
        <Route exact path='/structures/:name-:structureId' component={Structure}/>
        <Route exact path='/technologies' component={Technologies}/>
        <Route exact path='/technologies/:name-:technologyId' component={Technology}/>
        <Route exact path='/units' component={Units}/>
        <Route exact path='/units/:name-:unitId' component={Unit}/>
      </Switch>
    </BodyWrapper>
    </Wrapper>
  );
}

export default App;
