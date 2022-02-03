import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  max-width:  500px;
  margin: auto;
  display: flex;
`

class DogImage extends React.Component{

  render(){
    return(
        <Img src={this.props.src}/>
    )
  }
}

export default DogImage
