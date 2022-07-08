//
import { HotelApp } from "./components/Main/HotelApp/HotelApp";
import HotelPage from "./components/pages/HotelPage";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelApp />} />
        <Route path="/hotels/:id" element={<HotelPage />} />
        <Route path="*" element={<Navigate replace to="/hotels" />} />
      </Routes>
    </Router>
  );
}

export default App;
