import React from 'react';
import styled from 'styled-components';
import Circle from '../Circle';
import background from './img/map.jpg';

class Targetpage extends React.Component {

  handleClick = (event) => {
    const { history } = this.props;

    history.push(`/${event.clientX}/${event.clientY}`);
  }

  render() {
    const { x, y } = this.props.match.params;
    return (
      <MapStyled onClick={this.handleClick}>
        <Circle top={y} left={x} />
      </MapStyled>
    )
  }
}

const MapStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  position: relative
`;

export default Targetpage;