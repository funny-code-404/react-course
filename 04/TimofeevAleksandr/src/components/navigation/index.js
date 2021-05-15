import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
  background: lightgray;
  border-radius: 6px;
  user-select: none;
   div:hover{
     background: #c4dfdf;
   }
`
const Item = styled.div`
  width: 20%;
  text-align: center;
  padding: 6px;
  font-size: 1.2rem;
`

class Navigation extends React.Component{

  handleClick = (e) => {
    this.props.getDogName(e.target.id)
  }

  render(){
    const { nameDogs } = this.props

    return(
      <NavigationContainer>
        {nameDogs.map((item, i) => (
          <Item key={i} id={item} onClick={this.handleClick}>{item}</Item>
        ))}
      </NavigationContainer>
    )
  }
}

export default Navigation
