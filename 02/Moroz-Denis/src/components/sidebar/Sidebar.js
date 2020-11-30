import { Component } from 'react';

import './sidebar.scss'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
        };
    };


    render() {

        const { sidebars } = this.props;
        const isNotEmpty = Boolean(sidebars.length);

        const sidebarElems = isNotEmpty && sidebars.map(item =>
            <li key={item.id}><a href= "#">{item.label}</a></li>
        );

        return (
            <nav>
                <button onClick = {this.handleClick}>{this.state.isOpen ? 'Скрыть меню' : 'Показать меню'}</button>
                {this.state.isOpen && <ul>{sidebarElems}</ul>}
            </nav>
            
        );
        
    }

    handleClick = () => {
        this.setState((prevState) => ({
            ...prevState,
            isOpen: !prevState.isOpen
        }));
    };
};


export default Sidebar; 