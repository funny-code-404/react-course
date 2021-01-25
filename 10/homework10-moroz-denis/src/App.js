import DataList from './components/DataList';
import { title } from './config';
import { Navigation } from './components/Navigation';

function App({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>   
  );
}

export default App;
