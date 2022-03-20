import { TableContextProvider } from './context/TableContext/TableContextProvider/TableContextProvider';

// COMPONENT
import TableData from './component/TableData/TableData';

function App() {
  return (
    <TableContextProvider>
      <div className="App">
        <TableData />
      </div>
    </TableContextProvider>
  );
}

export default App;
