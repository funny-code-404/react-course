import { TableContextProvider } from './context/TableContext/TableContextProvider/TableContextProvider';
import './App.css';

function App() {
  return (
    <TableContextProvider>
      <div className="App">App</div>
    </TableContextProvider>
  );
}

export default App;
