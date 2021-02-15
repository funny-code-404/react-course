import React from 'react';
import './style.css'

class ListElement extends React.Component {
    render() {
        return(
            <li className="list__elem">{this.props.children}</li>
        ) 

    }
}

export default ListElement; 