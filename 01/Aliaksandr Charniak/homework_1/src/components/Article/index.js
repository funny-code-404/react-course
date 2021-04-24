import React from 'react'

class Article extends React.Component {
  render() {
    const { info, index } = this.props
    return (
      <div>
        <h1>{info[index].capital}</h1>
        <p>
          {info[index].capital} является столицей страны {info[index].country}.
        </p>
        <p>
          Населенеие страны {info[index].country} равняется {info[index].peoples} млн. человек
        </p>
      </div>
    )
  }
}

export default Article
