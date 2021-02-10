import React from 'react';
import './style.css';
import ListElement from '../ListElement'

class Nav extends React.Component {

    data = ['О нас', 'Туры', 'Визы', 'Агентам', 'Контакты', 'Помощь']; 

    renderList() {
        const ListElements = this.data.map((text, index) => {
            return <ListElement key={index} className="list__element">{text}</ListElement>
        })
        return ListElements;
    }

    render() {
        return (
            <nav className="nav">
                {this.props.children}

                <ul className="nav__list">
                    {this.renderList()}
                </ul>
            </nav>
        )
    }
}

export default Nav;

// class List extends React.Component {

//     data = ['Menu', 'About us', 'Todays Deals', 'Customer Servise', 'Contacts']; 

//     renderList() {
//         const ListItems = this.data.map((text, index) => {
//             return <ListItem key={index}>{text}</ListItem>
//         })
//         return ListItems;
//     }

//     render() {
//         return(
//             <ul className="list">
//                 {this.renderList()}
//             </ul>
//         ) 

//     }
// }