import React, {Component} from 'react'
import styled from 'styled-components'
import { BUTTON_NAME } from './config'

const FormCars = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    border: 1px grey solid;
`
const Input = styled.input`
    height: 25px;
    font-size: 18px;
    padding-left: 8px;
`
const Button = styled.button`
    border: none;
    height: 35px;
    font-size: 24px;
    cursor: pointer;
`

class  Form extends Component{
    state = {
        car: { brand: "", model: "", year: "", price: "" }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState((prevState) => ({
            car: { ...prevState.car, [name]: value }
        }))
    }

    handleClick = (event) => {
        event.preventDefault()
        const { car } = this.state
        if (car.brand && car.model && car.year && car.price) {
            const { handleSubmitClick } = this.props
            handleSubmitClick(car)
            this.setState({
                car: { brand: "", model: "", issueYear: "", price: "" },
            })
        } else {
            alert("Fill in all fields!!!")
        }
    }

    render() {
        const { brand, model, year, price } = this.state.car
        const { brandProps, modelProps, yearProps, priceProps } = this.props.data

        return (
            <FormCars>
                <Input
                    name='brand'
                    placeholder='Brand'
                    type='text'
                    value={brand || brandProps || ""}
                    onChange={this.handleChange}
                />
                <Input
                    name='model'
                    placeholder='Model'
                    type='text'
                    value={model || modelProps || ""}
                    onChange={this.handleChange}
                />
                <Input
                    name='year'
                    placeholder='Year'
                    type='number'
                    value={year || yearProps || ""}
                    onChange={this.handleChange}
                />
                <Input
                    name='price'
                    placeholder='Price'
                    type='number'
                    value={price || priceProps || ""}
                    onChange={this.handleChange}
                />
                <Button
                    onClick={this.handleClick}
                >
                    {BUTTON_NAME}
                </Button>
            </FormCars>
        )
    }
}

export default Form