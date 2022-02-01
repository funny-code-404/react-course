import React from "react";
import './Form.scss'

class Form extends React.Component {
    state = {
        inputVal: {
            brand: this.props.inputVal.brand,
            model: this.props.inputVal.brand,
            year: this.props.inputVal.brand,
            price: this.props.inputVal.brand,
        },
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.inputVal !== prevState.inputVal){
            return {
                inputVal: nextProps.inputVal
            }
        }
    }
    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sendCar(this.state.inputVal)
        this.props.parentThis.setState((prevState) => ({
            ...prevState,
            inputVal: {
                brand: '',
                model: '',
                year: '',
                price: '',
            }
        }))
    }

    handleChange = (event) => {
        this.props.parentThis.setState((prevState) => ({
            ...prevState,
            inputVal: {
                ...prevState.inputVal,
                [event.target.name]: event.target.value
            },
        }))
    }

    render(){
        let {brand, model, year, price} = this.state.inputVal

        return (
            <form onSubmit={this.handleSubmit}>
                <input name = 'brand' placeholder = 'Марка' value = {brand} onChange={this.handleChange}/>
                <input name = 'model' placeholder = 'Модель' value = {model} onChange={this.handleChange}/>
                <input name = 'year' placeholder = 'Год' value = {year} onChange={this.handleChange}/>
                <input name = 'price' placeholder = 'Стоимость' value = {price} onChange={this.handleChange}/>
                <button disabled = {!(this.state.inputVal.brand && this.state.inputVal.model && this.state.inputVal.year && this.state.inputVal.price)}>Добавить</button>
            </form>
        )
    }

}

export default Form;