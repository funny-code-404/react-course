import React from "react";
import './styles.css';

class ErrorBoundary extends React.PureComponent {
    state = {
       error: null,

    };

    componentDidCatch(error) {
        if(error) {
            this.setState({
                error: 'E R R O R',
            });
        }
    }

    render() {
        const { children } = this.props;
        const { error } = this.state;

        return error ? <>{error}</> : <div className='error'>{children}</div>;
            
        
    }

 
}


export default ErrorBoundary;