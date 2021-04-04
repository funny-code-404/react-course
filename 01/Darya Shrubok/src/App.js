import "./App.css";
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
