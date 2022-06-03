import Hotels from "./components/Hotel/Hotels";
import { data } from "./components/Hotel/data";


function App() {
  return <div className="my-app">
      <Hotels hotels={data} title='Homes guests loves' />
    </div>
}

export default App;
