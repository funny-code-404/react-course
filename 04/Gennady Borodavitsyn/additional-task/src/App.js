import React from 'react'
// import logo from './logo.svg';
import './App.css'

// component
import TableComp from './components/TableComp/TableComp'
import FormComp from './components/FormComp/FormComp'

class App extends React.Component {
  state = {
    values: {
      brand: '',
      model: '',
      year: '',
      price: '',
    },
    items: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { values, items } = this.state

    items.push({
      brand: values.brand,
      model: values.model,
      year: values.year,
      price: values.price,
    })

    this.setState({
      values: {
        brand: '',
        model: '',
        year: '',
        price: '',
      },
      items,
    })
    // e.target.reset()
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [e.target.name]: e.target.value,
      },
    }))
  }

  render() {
    const { values, items } = this.state

    return (
      <div className="App">
        <TableComp items={items} />
        <FormComp
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newBrand={values.brand}
          newModel={values.model}
          newYear={values.year}
          newPrice={values.price}
        />
      </div>
    )
  }
}

export default App
