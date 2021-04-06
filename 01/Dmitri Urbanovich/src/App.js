import "./App.css";
import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;