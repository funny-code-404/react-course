import { Routers, MainNavigation, Loading, SignOut } from "./components";
import { paths, titles } from "./config";
import './app.css';

function App() {
  return (<>
    <Loading />
      <div className='container'>
        <header>
          <nav className='menu'>
            <ul>
              <MainNavigation path={paths.home} title={titles.home} />
              <MainNavigation path={paths.civilizations} title={titles.civilizations} />
              <MainNavigation path={paths.units} title={titles.units} />
              <MainNavigation path={paths.structures} title={titles.structures} />
              <MainNavigation path={paths.technologies} title={titles.technologies} />
            </ul>
          </nav>
          <SignOut />
        </header>
        <Routers />
      </div>
</>);
}

export default App;
