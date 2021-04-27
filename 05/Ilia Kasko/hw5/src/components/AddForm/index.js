import React, {Component} from 'react';

class AddForm extends Component{
    state = {
        todo: ''
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState(() => ({
            todo: value
        }))
    }

    handleClick = (e) => {
        e.preventDefault()
        const {todo} = this.state
        const {onClick} = this.props
        onClick(todo)
        this.setState(() => ({
            todo: ''
        }))
    }

    render() {
        let {todo} = this.state
        return (
           <form>
               <input value={todo} onChange={this.handleChange} />
               <button onClick={this.handleClick} >Add</button>
           </form>
        );
    }


}

export default AddForm;
