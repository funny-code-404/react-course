import React from 'react';
import styled from 'styled-components';

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`

class Main extends React.Component {
  handleClick = (e) => {
    const { history } = this.props;
    history.push(`/${e.clientX}/${e.clientY}`)
  }

  render() {
    return (
      <Map onClick={this.handleClick}>
      </Map>
    )
  }
}

export default Main;
