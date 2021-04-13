import React from 'react';
import Item from './Item/Item.js';
import styled from 'styled-components';

const ListBlock = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Title = styled.h1`
  text-align: center;
  font-family: arial;
`

class List extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
      <Title>Cats</Title>
      <ListBlock>
        {data.map(item => {
          return (
            <Item key={item.id} {...item} />
          )
        })}
      </ListBlock>
      </>
    )
  }
}

export default List;
