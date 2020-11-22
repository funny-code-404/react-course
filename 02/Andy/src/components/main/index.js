import React, { Component } from 'react';

import './style.scss';

class Main extends Component {
    render () {

        const { cards } = this.props;

        const  isNotEmpty = Boolean(cards.length);

        return(
        <main>
            {isNotEmpty && (
                    <div className='mainpart'>
                        {
                            cards.map(item => 
                            <div key={item.id}>
                                <img alt='images' src={item.img}></img>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                            )
                        }
                    </div>
                )}
        </main>
        );
    }
}

export default Main; 