import React from 'react'

class Navigation extends React.Component {
  handleClick = (e) => {
    const { id } = e.target
    this.props.updateData(id)
  }

  render() {
    const { countries } = this.props
    return (
      <nav>
        <ul>
          {countries.map((item, i) => {
            return (
              <li key={i}>
                <a href="#" id={i} onClick={this.handleClick}>
                  {item.capital}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navigation
