import React from 'react'
import ListItem from '../listItem'
import styled from 'styled-components'

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 1024px;
  justify-content: end;
`

class List extends React.Component{


  render() {
    const { data, activeNote, deleteNote } = this.props
    return(
      <>
      <Ul>
        {data.map((item, i) => (
          <ListItem data={item} key={i} activeNote={activeNote} deleteNote={deleteNote}/>
        ))}
      </Ul>
      </>
    )
  }
}

export default List
