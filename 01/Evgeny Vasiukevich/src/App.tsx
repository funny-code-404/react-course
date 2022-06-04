import React from 'react';
import './App.css';
import HomesBlock from './components/HomesGuestsLoves/HomesBlock';
import { homesData } from './data/homesData';

function App() {
  return (
    <div className="App">
      <HomesBlock homes={homesData} title='Homes guests loves'/>
    </div>
  );
}

export default App;
