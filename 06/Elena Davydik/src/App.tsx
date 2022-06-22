import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Stays } from "./pages/Stays";
import { Hotel } from "./pages/Hotel";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stays" element={<Stays />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/*" element={<Stays />} />
      </Routes>
    </Router>
  );
}
