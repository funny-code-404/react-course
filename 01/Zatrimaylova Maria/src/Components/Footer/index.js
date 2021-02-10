import React from 'react';
import './style.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                {this.props.children} 
            </footer>
        )
    }
}

export default Footer;