import React from "react";

const arrayItems = ["point 1", "point 2", "point 3", "point 4"];

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
  };

  listItems = (arrayItems) =>
    arrayItems.map((item, index) => <li key={index}>{item}</li>);

  render() {
    const { headLabel } = this.props;
    const { isShown } = this.state;
    const renderListItems = this.listItems(arrayItems);

    return (
      <div>
        {isShown && <h1>{headLabel}</h1>}
        <ul>{renderListItems}</ul>
        <button onClick={this.handleClick}>Show / hide header</button>
      </div>
    );
  }
}

export default Counter;
