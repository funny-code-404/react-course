import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 8px;
  width: 300px;
  border: 2px solid grey;
  border-radius: 4px;
  margin: 8px 16px;
  font-family: arial;
  background-color: rgb(212, 199, 199);

  & h3 {
    margin: 2px;
    text-align: center;
  }

  & p {
    font-size: 14px;
    text-align: justify;
  }
`

const ListItemImg = styled.img`
  width: 100%;
  height: auto;
`

class Item extends React.PureComponent {
  render() {
    const { name, description, temperament, weight, image } = this.props;
    return (
      <ListItem>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{'Temperament: ' + temperament }</p>
        <p>{'Weight: ' + weight.metric + 'kg'}</p>
        {image && <ListItemImg src={image.url} />}
      </ListItem>
    )
  }
}

export default Item;
