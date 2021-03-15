import React from 'react';
import CatsDataProvider from './Components/CatsDataProvider';
import Container from './Components/Container';
import CatsList from './Components/CatsList';

class App extends React.Component {
  render() {
    return (
      <Container>
        <CatsDataProvider>
          {data => <CatsList data={data}/>}
        </CatsDataProvider>
      </Container>
    )
  }
}

export default App;