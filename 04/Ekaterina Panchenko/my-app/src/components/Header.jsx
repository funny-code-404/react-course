import React from "react";
import styled from "styled-components";

class Header extends React.Component {
  onClick = (name) => {
    this.props.handleChange(name);
  };

  render() {
    return (
      <HeaderBlock>
        {this.props.dog.map(({ name, id }) => (
          <Button onClick={() => this.onClick(name)} key={id}>
            {name}
          </Button>
        ))}
      </HeaderBlock>
    );
  }
}

const Button = styled.button`
  cursor: pointer;
  margin-right: 20px;
  padding: 5px 15px;
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

export default Header;
