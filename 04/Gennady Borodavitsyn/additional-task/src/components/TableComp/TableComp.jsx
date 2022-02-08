import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'

class TableComp extends React.Component {
  render() {
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
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr> */}
        </tbody>
      </Table>
    )
  }
}

export default TableComp
