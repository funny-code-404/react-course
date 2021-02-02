import Routes from '../Routes'
import { paths, titles } from '../../config';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../MainNavigation';
import BigLoader from '../Loader/BigLoader';
import './App.css';

function App() {
  return (
    <div className="App">
      <BigLoader />
      <div className='menu_link' >
        <NavLink activeClassName="nav_active" exact to={paths.home}>{titles.home}</NavLink>
      </div>
      <MainNavigation
        path={paths.civilizations}
        title={titles.civilizations}
      />
      <MainNavigation
        path={paths.units}
        title={titles.units}
      />
      <MainNavigation
        path={paths.structures}
        title={titles.structures}
      />
      <MainNavigation
        path={paths.technologies}
        title={titles.technologies}
      />
      <hr />
      <Routes />

    </div>
  );
}
export default App;
