import React from "react";
import './style.scss'

class ListItem extends React.PureComponent {   
    render(){
        const {onClick, content } = this.props

        return (
            <li onClick={onClick} >{content}</li>
        ) 
    }
}

export default ListItem