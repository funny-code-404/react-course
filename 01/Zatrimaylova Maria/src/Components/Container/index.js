import React from 'react';
import './style.css'

class Container extends React.Component {
    render() {
        return (
            <footer className="container">
                {this.props.children}
            </footer>
        )
    }
}

export default Container;