import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';
import Main from './components/Main';
import Text from './components/Text';
import List from './components/List';
import Form from './components/Form';

const LABELS = {
  title: 'Article header',
  subTitle: 'Article sub header',
  text: 'Article text',
};

function App() {
  return (
    <div className='App'>
      <Header />
      <Main>
        <Article>
          <Text text={LABELS.title} />
          <Text text={LABELS.subTitle} />
          <Text text={LABELS.text} />
        </Article>
      </Main>
      <List>
        {Object.values(LABELS).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
      <Footer />
      <Form />
    </div>
  );
}

export default App;
