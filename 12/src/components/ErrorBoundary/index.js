import React from "react";
import PropTypes from 'prop-types'

import { warning } from "./config";

class ErrorBoundary extends React.Component {
    state = {
        error: false,
    }

    componentDidCatch(e) {
        if(e){
            this.setState({ error: true })
        }
    }

    render(){
        const { error } =this.state;
        return error ? <h1>{ warning }</h1> : this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;