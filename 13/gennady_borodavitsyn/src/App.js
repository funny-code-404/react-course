import './App.css';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Form submit={(data) => console.log(data)} />
    </div>
  );
}

export default App;
