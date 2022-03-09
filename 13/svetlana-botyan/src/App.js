
import { Form } from './components/Form'


function App() {
  return (
    <div>
      <Form submit={(data) => console.log(data)} />
    </div>
  );
}

export default App;
