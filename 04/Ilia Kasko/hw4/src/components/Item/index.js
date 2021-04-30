import React, {Component} from 'react';

const top5 = [{url: 'husky', breed:'Husky'}, {url: 'eskimo', breed:'Eskimo'},
    {url: 'dhole', breed:'Dhole'}, {url: 'retriever/chesapeake', breed:'Chesapeake Retriever'},
    {url: 'doberman', breed:'Doberman'},
]

class Item extends Component{


    handleClick = (e) => {
        const { onClick } = this.props
        const { id } = e.target
        onClick(top5[id])
    }

    render() {
        return (
            <div>
                {top5.map((item, i) => (
                    <a key={i} href={`#${item.breed}`} id={i} onClick={this.handleClick}>
                        {item.breed}
                    </a>
                ))}
            </div>
        )
    }
}

export default Item;
