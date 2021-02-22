import React from "react";
import styled from "styled-components";

class Img extends React.Component {
  render() {
    return <ImgContainer src={this.props.src} alt="" />;
  }
}

const ImgContainer = styled.img`
  max-width: 100%;
  display: flex;
  margin: auto;
`;

export default Img;
