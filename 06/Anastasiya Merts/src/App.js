// Домашнее задание. Написать базовую реализацию карты с использование React Router. 
// При клике в любое ее место - на данном месте рисовать маркер, а координаты хранить 
// в параметрах адресной строки; при введении параметров в адресную строку вручную - 
// перемещать маркер в нужное место, согласно его координатам. За основу масштабирования 
// взять размер в пикселях в ширину и высоту. и условный размер ячейки так, что получилось 
// поле 20Х20 (например, при ширине и высоте экрана в 1000 пикселей, получится 50 условных 
// ячеек в 20х20 пикселей каждая)

import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Map from './components/Map';
import MapArea from './components/MapArea';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={Map}/>
            <Route path='/:coordinates' component={MapArea}/>
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
