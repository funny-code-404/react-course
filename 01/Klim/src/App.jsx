import React from 'react';

import {Header} from './components/Header/index';
import {Main} from './components/Main/index';
import {Footer} from './components/Footer/index';

class App extends React.Component {
  render() {
    return(
      <>
      <Header />
      <Main />
      <Footer />
      </>
    );
  }
}

export default App;
