import Article from './components/Article';
import Cars from './components/Cars';
import styled from 'styled-components'

const Wrapper = styled.div`
max-width: 95%;
margin: 20px auto;
`;

function App() {
  return (
    <Wrapper>
      <Cars />
      <Article />
    </Wrapper>
  );
}

export default App;
