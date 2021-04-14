import React from 'react'

class Navigation extends React.Component {
  render() {
    const { countries, updateData } = this.props
    return (
      <nav>
        <ul>
          {countries.map((item, i) => {
            return (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => {
                    updateData(i)
                  }}
                >
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
