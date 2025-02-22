import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {HotelsApp} from "./components/hotelsApp";
import {Hotel} from "./components/hotelPage/hotel";

export function App() {

    return (
        <Router>
            <Routes>
                <Route path="/hotels" element={<HotelsApp/>}/>
                <Route path="/hotels/:hotelId" element={<Hotel/>}/>
                <Route path="/*" element={<HotelsApp/>}/>
            </Routes>
        </Router>
    );
}
