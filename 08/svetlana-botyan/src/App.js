import { FormContextProvider } from './context/FormContextProvider';
import Form from './components/Form';
import { List } from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Form />
        <List />
      </FormContextProvider>
    </div>
  );
}

export default App;
