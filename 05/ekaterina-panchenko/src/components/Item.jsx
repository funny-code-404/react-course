import React from "react";
import styled from "styled-components";

class Item extends React.Component {
  state = {
    isActive: false,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
  };

  shouldComponentUpdate(prevProps, prevState) {
    return prevState.isActive !== this.state.isActive;
  }

  render() {
    const { name, temperament, description, img, weight } = this.props;
    console.log(name);

    return (
      <>
        <Header onClick={this.handleClick}>
          <H>{name}</H>
        </Header>
        {this.state.isActive ? (
          <Body>
            <Img src={img}></Img>
            <P>Weight: {weight}</P>
            <P>Temperament: {temperament}</P>
            <P>Description: {description}</P>
          </Body>
        ) : null}
      </>
    );
  }
}

const Header = styled.div`
  width: 22%;
  background: lightblue;
  text-align: center;
`;

const H = styled.h2`
  padding: 10px;
`;

const P = styled.p`
  width: 60%;
  font-weight: 600;
`;

const Body = styled.div`
  width: 60%;
`;

const Img = styled.img`
  max-width: 60%;
`;

export default Item;
