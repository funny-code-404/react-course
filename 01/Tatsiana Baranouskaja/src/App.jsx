import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


import './App.css';

class App extends React.Component {
  render () {
    return <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}




export default App;
