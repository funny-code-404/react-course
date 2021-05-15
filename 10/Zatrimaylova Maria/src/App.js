import GlobalStyles from './components/GlobalStyles/style.js';
import { Container } from './style';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Form />
        <List />
      </Container>
    </>
  );
};

export default App;
