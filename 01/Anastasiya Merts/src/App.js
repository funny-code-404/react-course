import React from 'react';
import Header from './components/Header/header';
import SearchArea from './components/search';
import Causes from './components/causes';
import TripCase from './components/trip';
import Footer from './components/Footer/footer';
import { causes } from './components/objects';
import { tripDirections } from './components/objects';

import './style.css'

class App extends React.Component {
  render() {
    return (
    <>
      <div className="banner-wrap">
        <div className="banner">
          <Header />
          <SearchArea />
          <Causes causes={causes} title="Почему именно мы"/>
        </div>
      </div>
      <TripCase trips={tripDirections} title="Актуальные направления"/>
      <Footer/>
    </>
    );
  }
}
  
export default App;