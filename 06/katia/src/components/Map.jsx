import React from "react";
import map from "../mapworld.jpg";
import styled from "styled-components";
import Marker from "./Marker";

class Map extends React.Component {
  handleClick = ({ clientX, clientY }) => {
    this.props.history.push(`/${clientX}/${clientY}`);
  };

  render() {
    const { left, top } = this.props.match.params;

    return (
      <Container>
        {left && top ? <Marker top={top} left={left} /> : null}
        <Background onClick={this.handleClick} src={map} />
      </Container>
    );
  }
}

const Background = styled.img`
  cursor: pointer;
  max-width: 100%;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export default Map;
