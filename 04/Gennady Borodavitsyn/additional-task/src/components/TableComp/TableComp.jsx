import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'

class TableComp extends React.Component {
  render() {
    const { items } = this.props
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year of manufacture</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.brand}>
              <td>{index + 1}</td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.year}</td>
              <td>{`${item.price} $`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default TableComp
