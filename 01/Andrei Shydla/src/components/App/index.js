import React from "react";
import Header from "../header";
import Navigation from "../navigation";
import Articles from "../Articles";
import Aside from "../Aside";
import Footer from "../Footer";

import "./style.css";
// import articles from '../fixtures'
// import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <main className="main">
        <Header />

        <Navigation />

        <div className="mainaside container">
          <div className="mainaside-columns mainaside-articles">
            <Articles />
          </div>
          <div className="mainaside-columns mainaside-aside">
            <Aside />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
