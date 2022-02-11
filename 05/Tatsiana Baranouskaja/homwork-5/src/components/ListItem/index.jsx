import React from "react";

class ListItem extends React.PureComponent {
    state = {
        isOpen: true,

    };


    handleClick = () => this.setState(prevState => ({
        isOpen: !prevState.isOpen,
    }));

    render() {
        const { title, body } = this.props; 
        const { isOpen } = this.state;

        return <li>
            <h3>
                {title}    &nbsp;    <button onClick={this.handleClick}>Open/close</button>  
                </h3>
            {isOpen && <p>{body}</p>}
        </li>;
    }

 
}


export default ListItem;