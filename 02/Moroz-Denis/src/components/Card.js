import { Component } from 'react';

class Card extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    };

    render() {

        const { card } = this.props;
       
        return (
            <>
                <h2>{card.title}</h2>
                <button onClick = {this.handleClick}>{this.state.isOpen ? 'Скрыть текст' : 'Показать текст'}</button>
                <img alt = "image" src = {card.img}/>
                {this.state.isOpen && <p>{card.text}</p>}
            </>
        );            
    };

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
};

export default Card; 