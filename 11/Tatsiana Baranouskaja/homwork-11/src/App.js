import DataList from "./components/DataList";
import ErrorMessage from "./components/ErrorMessage";
import Preloader from "./components/Preloader";

const url = 'https://jsonplaceholder.typicode.com/users';


function App() {
  console.log('APP');
  return (
    <div className="App">
     <Preloader/>
     <ErrorMessage/>
     <DataList url={url}/>
    </div>
  );
}

export default App;

// приложение не работает, хотя делаю все как на уроке