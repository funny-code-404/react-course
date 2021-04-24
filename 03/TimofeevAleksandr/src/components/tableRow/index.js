import React from 'react'
import styled from 'styled-components'


const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: ${(props) => (props.activeItem ? "gray" : "white")};

    div{
      width: 23%;
      padding: 3px;
      border: 1px solid black;
    };

  div:nth-child(1){
    width: 8%;
  }
`


class TableRow extends React.Component{

  handleClick = () => {
    this.props.getRowId(this.props.dataItem.id)

  }

  render(){
    const { brand, model, year, price, id, active } = this.props.dataItem
    const { index } = this.props
    return(
      <>
      <Row id={id} onClick={this.handleClick} activeItem={active}>
        <div>{index === 0 ? 'N' : index}</div>
        <div>{brand}</div>
        <div>{model}</div>
        <div>{year}</div>
        <div>{price}</div>
      </Row>
      </>
    )
  }
}

export default TableRow
