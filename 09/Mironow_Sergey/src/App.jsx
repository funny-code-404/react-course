import './App.scss';
import Form from './Components/Form/Form';
import UsersList from './Components/UsersList/UsersList';

function App() {
  console.log('APP_RELOAD')
  return (
    <div className="App">
      <Form/>
      <UsersList/>
    </div>
  );
}

export default App;
