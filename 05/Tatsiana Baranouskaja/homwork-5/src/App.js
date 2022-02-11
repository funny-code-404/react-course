
import './App.css';
import ListItem from './components/ListItem';
import List from './components/List';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <ErrorBoundary>
  
      <List/>
  
    </ErrorBoundary >
  );
}

export default App;
//Приходит пустой массив, хотя вроде все правильно делала.