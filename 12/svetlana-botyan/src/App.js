import ListReviews from './components/ListReviews';
import Preloader from './components/Preloader';
import ErrorMessage from './components/ErrorMessage';
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <Preloader />
      <ErrorMessage />
      <Form />
      <ListReviews />
    </div>
  );
}

export default App;
