import React from "react";
import styled from "styled-components";

import Item from "./Item";

class Container extends React.Component {
  state = {
    data: [],
    isReversed: false,
  };

  componentDidMount() {
    this.getData();
  }

  get dataList() {
    const { data, isReversed } = this.state;
    return isReversed ? data.reverse() : data;
  }

  getData = () => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data.map((item) => ({
            img: item.image ? item.image.url : "",
            name: item.name,
            weight: item.weight.metric,
            description: item.description,
            temperament: item.temperament,
            id: item.id,
          })),
        });
      });
  };

  handleClick = () => {
    this.setState((prevState) => ({ isReversed: !prevState.isReversed }));
  };

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>Sort</Button>
        <List>
          {this.dataList.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </List>
      </>
    );
  }
}

const Button = styled.button`
  padding: 10px;
  width: 160px;
  background: lightseagreen;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  margin-left: 50px;
`;

const List = styled.ul``;

export default Container;
