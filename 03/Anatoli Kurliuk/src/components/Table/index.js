import React, {Component} from "react"
import styled from 'styled-components'

const TableCar = styled.table`
    width: 700px;
    border: grey solid 1px;
`
const Th = styled.th`
    border: black solid 2px;
    width: 150px;
`
const Td = styled.td`
    height: 30px;
    border: black solid 2px;
    font-size: 20px;
    padding-left: 5px;
`

class Table extends Component {
    handleClick = (event) => {
        event.preventDefault()
        const { id } = event.target
        const { store, handleTableClick } = this.props
        handleTableClick(store[id])
    }

    render() {
        const {store} = this.props

        return (
            <TableCar>
                <thead>
                    <tr>
                        <Th>№</Th>
                        <Th>Brand</Th>
                        <Th>Model</Th>
                        <Th>Year</Th>
                        <Th>Price</Th>
                    </tr>
                </thead>
                <tbody>
                {store.map((item,index) => (
                    <tr key={index} id={index} onClick={this.handleClick}>
                        <Td>{index + 1}</Td>
                        <Td>{item.brand}</Td>
                        <Td>{item.model}</Td>
                        <Td>{item.year}</Td>
                        <Td>{item.price}</Td>
                    </tr>
                ))}
                </tbody>
            </TableCar>
        )
    }
}

export default Table