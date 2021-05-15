import "./App.css";
import Form from "./components/Form";
import { config } from "./components/Form/config";

function App() {
  return (
    <div className="App">
      <Form inputs={config.inputs} />
    </div>
  );
}

export default App;
