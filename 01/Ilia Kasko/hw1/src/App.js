import React, {Component} from 'react';
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

const data = [
    {headArticle: "First Head", bodyArticle: "Text for first body"}, {headArticle: "Second Head", bodyArticle: "Text for second body"},
    {headArticle: "Third Head", bodyArticle: "Text for third body"}]

class App extends Component{

  render() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <ArticleList data={data}/>
        </div>
    );
  }
}

export default App;
