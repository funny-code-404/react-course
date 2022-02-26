import './App.css';

// COMPONENTS
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';
import { FormContextProvider } from './context/formContext/FormContextProvider';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Form />
        <ToDoList />
      </FormContextProvider>
    </div>
  );
}

export default App;
