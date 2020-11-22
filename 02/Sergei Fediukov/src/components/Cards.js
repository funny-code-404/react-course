import React from 'react'

class Cards extends React.Component {


    render() {
        const props = this.props

        return (
            <div className="cards">
                {
                    Boolean(props.cards.length) &&
                    <ul>
                        {
                            props.cards.map((x) =>
                                <li key={x.id}>
                                    <div className='card_img'>
                                        <img className="img" alt="no img" src={x.img} />
                                    </div>
                                    <div className="card_title">{x.title}</div>
                                    <div >{x.text}</div>
                                </li>)
                        }
                    </ul>
                }
            </div>
        )
    }
}
export default Cards