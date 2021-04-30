import React, {Component} from 'react'

class Form extends Component{
    state = {

        brand: '',
        model: '',
        year: '',
        cost: '',
    }

    handleClick = (e) => {
        const {onClick} = this.props
        e.preventDefault()
        onClick(this.state)
        this.setState(() => ({
            brand: '',
            model: '',
            year: '',
            cost: '',
        }))
    }
    handelChange = (e) =>{
        const {name, value} = e.target
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

        render() {
            const {item} = this.props
            const {brand,
                model,
                year,
                cost} = this.state
            return (
                <form>
                    <div className="body">
                        <input name="brand" value={item? item.value.brand: brand} onChange={this.handelChange}/>
                        <input name="model" value={item? item.value.model: model} onChange={this.handelChange}/>
                        <input name="year" value={item? item.value.year: year} onChange={this.handelChange}/>
                        <input name="cost" value={item? item.value.cost: cost} onChange={this.handelChange}/>
                        <button onClick={this.handleClick}>Send</button>
                    </div>
                </form>
            );
    }


}

export default Form;