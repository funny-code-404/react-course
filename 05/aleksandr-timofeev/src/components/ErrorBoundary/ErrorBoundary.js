import React from 'react';

class ErrorBoundary extends React.Component{
  state = {
    isError : false,
  }

  componentDidCatch(error){
    if(error) {
      this.setState({
        isError:true,
      })
    }
  }

  render(){
    const { children } = this.props;
    const { isError } = this.state
    return (isError ? <h1>ERROR</h1> : children)
  }
}

export default ErrorBoundary
