import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Point = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  position: fixed;
  top: ${props => props.y - 5}px;
  left: ${props => props.x - 5}px;
`

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`

class Marker extends React.Component {

  handleClick = (e) => {
    const { history } = this.props;
    history.push(`/${e.clientX}/${e.clientY}`)
  }

  render() {
    const { x, y } = this.props.match.params;
    return (
      <Map onClick={this.handleClick}>
        <Point x={x} y={y}></Point>
      </Map>
    )
  }
}

export default withRouter(Marker);
