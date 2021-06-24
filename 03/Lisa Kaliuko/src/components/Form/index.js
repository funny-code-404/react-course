import React from 'react'
import styled from 'styled-components'

const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`
const Input = styled.input`
  margin-bottom: 5px;
`

const Validation = styled.p`
  color: red;
`

const BRAND_KEY = 'brand';
const MODEL_KEY = 'model';
const YEAR_KEY = 'year';
const PRICE_KEY = 'price';

const validationMessage = 'All fields must be filled';


class Form extends React.Component {
  state = {
    values: {
      number: 1,
      [BRAND_KEY]: '',
      [MODEL_KEY]: '',
      [YEAR_KEY]: '',
      [PRICE_KEY]: '',
    },
    isEmpty: {
      [BRAND_KEY]: true,
      [MODEL_KEY]: true,
      [YEAR_KEY]: true,
      [PRICE_KEY]: true,
    },
  }

  handleChange = (e) => {
    const values = this.state.values
    const isEmpty = this.state.isEmpty

    values[e.target.name] = e.target.value


    for(let key in values) {
      if(values[key] !== '') {
        isEmpty[key] = false
      } else {
        isEmpty[key] = true
      }
    }

    this.setState( {values, isEmpty} )
  }

  handleClick = (e) => {
    e.preventDefault()

    const isEmpty = this.state.isEmpty

    if(!isEmpty[BRAND_KEY] && !isEmpty[MODEL_KEY] && !isEmpty[YEAR_KEY] && !isEmpty[PRICE_KEY]) {
      this.props.onChange(this.state.values)

      this.setState({
        values: {
          number: this.state.values.number + 1,
          [BRAND_KEY]: '',
          [MODEL_KEY]: '',
          [YEAR_KEY]: '',
          [PRICE_KEY]: '',
        },
        isEmpty: {
          [BRAND_KEY]: true,
          [MODEL_KEY]: true,
          [YEAR_KEY]: true,
          [PRICE_KEY]: true,
        },
      })
    }
  }

  // addDataFromTableToForm = () => {
  //   const {dataFromTable} = this.props

  //   this.setState({
  //     values: {
  //       number: dataFromTable.number,
  //       [BRAND_KEY]: dataFromTable[BRAND_KEY],
  //       [MODEL_KEY]: dataFromTable[MODEL_KEY],
  //       [YEAR_KEY]: dataFromTable[YEAR_KEY],
  //       [PRICE_KEY]: dataFromTable[PRICE_KEY],
  //     },
  //   })
  // }

  render() {
    const {...values} = this.state.values
    const {...isEmpty} = this.state.isEmpty
    const {dataFromTable} = this.props
    return (
      <FormTag>
        <Input placeholder='Brand' name={BRAND_KEY} value={values[BRAND_KEY] || dataFromTable[BRAND_KEY] || ''} onChange={this.handleChange} />
        <Input placeholder='Model' name={MODEL_KEY} value={values[MODEL_KEY] || dataFromTable[MODEL_KEY] || ''} onChange={this.handleChange} />
        <Input placeholder='Year' name={YEAR_KEY} value={values[YEAR_KEY] || dataFromTable[YEAR_KEY] || ''} onChange={this.handleChange} />
        <Input placeholder='Price' name={PRICE_KEY} value={values[PRICE_KEY] || dataFromTable[PRICE_KEY] || ''} onChange={this.handleChange} />
        {(isEmpty[BRAND_KEY] || isEmpty[MODEL_KEY] || isEmpty[YEAR_KEY] || isEmpty[PRICE_KEY])  && <Validation>{validationMessage}</Validation>}
        <button onClick={this.handleClick}>Send</button>
      </FormTag>
    )
  }
}

export default Form