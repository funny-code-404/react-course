import './App.scss';
import { ToDoProvider } from './Contexts/ToDoContextProvider';
import Form from './Components/Form/Form';
import List from './Components/List/List';



function App() {
  return (
      <div className="App">
        <ToDoProvider>
          <Form/>
          <List/>
        </ToDoProvider>
      </div>
  
  )
}

export default App;
