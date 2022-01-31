import Header from './components/Header';
import './App.css'
import Form from './components/Form/index'
import React from 'react';
import cards from './data/cards'

const LABELS = {
  title: 'Article header',
  subTitle: 'Article sub header',
  text: 'Article text',
};



class App extends React.Component {

  state = {
    cards: cards,
  }




  submitCard = (card) => {
    this.setState((prevState) => ({
        ...prevState,
        cards: prevState.cards.concat(card)
    }))
  }

  render(){
    return (
      <div className='App'>
        <Header cards = {this.state.cards}/>
        <Form submitCard = {this.submitCard}/>
      </div>
    );
  }
}

export default App;
