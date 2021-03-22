import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none
`
export const ListItem = styled.li`
  font-size: 18px;

  :hover {
    font-weight: bold;
    cursor:pointer;
  }
`

export const Name = styled.h2`
  width: 100%;
  text-align: center;
`

export const Cost = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
`
