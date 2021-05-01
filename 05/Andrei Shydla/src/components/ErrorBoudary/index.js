import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static propTypes = {
    children: PropTypes.shape({
      props: PropTypes.object,
    }),
  };

  static defaultProps = {
    children: {
      props: {},
    },
  };

  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  componentDidCatch(error) {
    console.dir("componentDidCatch", error);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return error ? <h1>Something went wrong</h1> : <div>{children}</div>;
  }
}

export default ErrorBoundary;
