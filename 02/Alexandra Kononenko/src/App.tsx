
import Homes from './component/Homes/Homes';
import SearchHomes from './component/Search/SearchHomes';
import {data} from './data/data';

function App() {
  return (
    <div className='app'>
      <SearchHomes homes={data} />
      <Homes/>
    </div>
  );
}

export default App;
