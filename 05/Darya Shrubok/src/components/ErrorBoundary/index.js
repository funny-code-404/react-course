import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error) {
    console.dir("dgsfe", error);
    return {
      error: true,
    };
  }
  componentDidCatch(error) {
    console.dir("catch", error);
  }
  render() {
    const { children } = this.props;
    const { error } = this.state;
    return error ? <h1>Error</h1> : <div>{children}</div>;
  }
}

export default ErrorBoundary;
