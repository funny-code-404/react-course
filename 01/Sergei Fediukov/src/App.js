import React from 'react'
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import About from './components/About'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App container">
      <Header />
      <Slider />
      <About />
      <Footer />
    </div>
  );
}


export default App;
