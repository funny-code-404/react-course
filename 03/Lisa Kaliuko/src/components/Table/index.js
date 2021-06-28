import React from 'react'

class Table extends React.Component {
  handleClick = (e) => {
    const parent = e.target.parentElement
    const getDataFromTable = this.props.onChange

    getDataFromTable(parent)   
  }

  render() {
    const data = this.props.data
    
    return (
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index} onClick={this.handleClick}>
                  <td>{item.number}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.year}</td>
                  <td>{item.price}</td>
                </tr>
              )
            })
          }
        </tbody>
    </table>
    )
  }
}

export default Table