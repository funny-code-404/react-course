import React from 'react'
import styled from 'styled-components';

const Img = styled.div`
  width: fit-content;
  margin: 0 auto;
`

class DogContainer extends React.Component{

  render(){
    const { urlImg } = this.props
    console.log('собачка загружена')
    return(
      <Img>
        <img src={urlImg} alt='dog' />
      </Img>
    )
  }
}

export default DogContainer
