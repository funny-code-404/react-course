import React from "react";
import "./style.css"
// import styled from 'styled-components'sss
const url = "https://jsonplaceholder.typicode.com/posts";

// const Li = styled.li`
// background-color: green;
// `

class DataList extends React.Component {
  state = {
    data: null,
    isOpen: false,
  };

  async componentDidMount() {
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data });
  }

  handleClick = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));

  render() {
    const { data } = this.state;
    const { isOpen } = this.state;

    return (
      <div>
        <h1>Data list</h1>
        <button onClick={this.handleClick}>Show Data</button>
        {isOpen && (
          <ul>
            {!data
              ? null
              : data.map((item) => <li key={item.id}>{item.title}</li>)}
          </ul>
        )}
      </div>
    );
  }
}

export default DataList;
