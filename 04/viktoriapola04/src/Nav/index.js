import React from 'react';
import styled from 'styled-components';

const ContainerName = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const DogName = styled.div`
  margin-right: 20px;
  padding: 10px 20px;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
`;

class Nav extends React.Component {

  onClick = (e) => {
    const { handlClick } = this.props;
    handlClick(e.target.innerText);
  }

  render() {

    return (
      <>
      <ContainerName className="conainer-name">
        {this.props.dogs.map(( item, i ) => {
          return <DogName className='dogs-name' onClick={this.onClick} key={i}>{item}</DogName>
        })}
      </ContainerName>
      </>      
    )
  }
}

export default Nav;