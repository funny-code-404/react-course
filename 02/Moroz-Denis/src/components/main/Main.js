import { Component } from 'react';

import './main.scss'
import Card from '../Card'

class Main extends Component {
    
    render() {

        const { cards } = this.props;
        const isNotEmpty = Boolean(cards.length);

        const cardsElements = isNotEmpty && cards.map(item =>
            <div key = {item.id}><Card  card = {item}/></div>
        );
        
        return (
            <main>{cardsElements}</main>
        );          
    };
};

export default Main; 