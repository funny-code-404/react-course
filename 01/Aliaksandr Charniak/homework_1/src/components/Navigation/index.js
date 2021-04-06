import React from 'react'

class Navigation extends React.Component {
  render() {
    const { countrys, updateData } = this.props
    return (
      <div>
        <nav>
          <ul>
            {countrys.map((item, i) => {
              return (
                <li>
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
      </div>
    )
  }
}

export default Navigation
