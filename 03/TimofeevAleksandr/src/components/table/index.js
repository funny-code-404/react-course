import React from 'react'
import styled from 'styled-components'
import TableRow from '../tableRow'


const TableWrapper = styled.div`
margin-top: 10px;
margin-left: 35%;
width: 65%;
`


class Table extends React.Component{
  state = {}

  render(){
    const { data, getRowId } = this.props
    return(
      <TableWrapper>
        {data.map((item, i) => (
          <TableRow dataItem={item} key={i} index={i} getRowId={getRowId}/>
        ))}
      </TableWrapper>
    )
  }
}

export default Table
