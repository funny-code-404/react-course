import { Hotels } from "./components/Hotel/Hotels";
import { data } from "./components/Hotel/data";
import { FormList } from "./components/AvailableHotels/FormList";


function App() {
  return <div className="my-app">
      <FormList />
      <Hotels hotels={data} title='Homes guests loves' />
    </div>
}

export default App;
