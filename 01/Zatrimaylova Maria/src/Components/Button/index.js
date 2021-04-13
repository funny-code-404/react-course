import React from 'react';
import './style.css'

class Button extends React.Component {
    render() {
        const {buttonTitle} = this.props;
        return (
            <button className="button">
                {buttonTitle}
            </button>
        )
    }
}

export default Button;