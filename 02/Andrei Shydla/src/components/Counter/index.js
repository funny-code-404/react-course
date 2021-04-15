import React from "react";

class Counter extends React.Component {
  state = {
    count: 1,
    isShown: true,
  };

  handleClick = () => {
    const { isShown } = this.state;
    // console.log(isShown);
    this.setState((prevState) => ({
      ...prevState,
      isShown: !isShown,
    }));
    // console.log(isShown);
  };

  //   isDataReceived = true;

  render() {
    const { headLabel } = this.props;
    const { isShown } = this.state;

    return (
      <div>
        {isShown && <h1>{headLabel}</h1>}
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
          <li>point 4</li>
        </ul>
        <button onClick={this.handleClick}>Show / hide header</button>
      </div>
    );
  }
}

export default Counter;
