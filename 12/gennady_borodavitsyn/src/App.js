import './App.css';

// COMPONENTS
import ToDoList from './components/ToDoList/ToDoList';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Preloader from './components/Preloader/Preloader';
import ToDoForm from './components/ToDoForm/ToDoForm';

function App() {
  return (
    <div className="App">
      <ErrorMessage />
      <Preloader />
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
