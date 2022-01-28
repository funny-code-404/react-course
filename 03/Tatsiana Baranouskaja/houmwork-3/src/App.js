import './App.css';
import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Main from "./components/Main";
import List from './components/List';
import Input from './components/Input';

const LABELS = {
  title: 'Article header',
  subTitle: 'Article sub header',
  text: 'Article text',
};



function App() {
  return (
    <div className="App">
     <Header/> 
    <Main>
      <Article>
        {/* <Text text={LABELS.title} />
        <Text text={LABELS.subTitle} />
        <Text text={LABELS.text} /> */}
      </Article>
    </Main>
   
    <List>
     {Object.values(LABELS).map((item) => (
       <li key={item}>item</li>
     ))}
    
      
    </List>
 
     <Footer/>

    </div>
  );
}

export default App;



// Я сделала то, что в классе делали, немного не разобралась с формой, чет она не добавляется.