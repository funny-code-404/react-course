import React from 'react';
import styled from 'styled-components';

class Container extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ContainerStyled>
        {children}
      </ContainerStyled>
    )
  }
}

const ContainerStyled = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export default Container;