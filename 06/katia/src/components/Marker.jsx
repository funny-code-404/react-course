import React from "react";
import styled from "styled-components";

class Marker extends React.Component {
  render() {
    const { left, top } = this.props;

    return <Circle top={top} left={left} />;
  }
}

const Circle = styled.div`
  ${({ top, left }) => `
    left: ${left}px;
    top: ${top}px;
    position: absolute;
    border-radius: 50%;
    background: red;
    width: 10px;
    height: 10px;
  `}
`;

export default Marker;
