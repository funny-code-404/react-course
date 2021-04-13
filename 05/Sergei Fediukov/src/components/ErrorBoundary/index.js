import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    };
    componentDidCatch(err) {
        if (err) {
            this.setState({
                hasError: true,
            })
        };
    };
    render() {
        const { hasError } = this.state;
        return hasError ? <h1>Warning, you have got the error</h1> : this.props.children;
    }
};
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};
export default ErrorBoundary;