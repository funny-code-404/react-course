import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import List from '../List'

const StyledNav = styled.nav`
  background-color: #333;
  overflow: hidden;

  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  a.active {
    background-color: #4caf50;
    color: white;
  }
`

const dataNav = [
  { breed: 'Havanese', url: 'https://dog.ceo/api/breed/havanese/images/random' },
  { breed: 'Lhasa', url: 'https://dog.ceo/api/breed/lhasa/images/random' },
  { breed: 'Shiba', url: 'https://dog.ceo/api/breed/shiba/images/random' },
  { breed: 'Stbernard', url: 'https://dog.ceo/api/breed/stbernard/images/random' },
  { breed: 'Pug', url: 'https://dog.ceo/api/breed/pug/images/random' },
]

class Navigation extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }
  handleClick = (e) => {
    const { onClick } = this.props
    const { id } = e.target
    onClick(dataNav[id])
  }

  render() {
    return (
      <StyledNav>
        <List>
          {dataNav.map((item, i) => (
            <List.Item key={i} id={i} item={item} onClick={this.handleClick} />
          ))}
        </List>
      </StyledNav>
    )
  }
}

export default Navigation
