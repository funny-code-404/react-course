import React, {Component} from 'react';

import './style.css'

class Item extends Component{

    handleDelete = (e) => {
        const {data, deleteItem} = this.props
        e.preventDefault()
        deleteItem(data.id)
    }

    handleCheck = () => {
        const {data, checkedItem} = this.props
        checkedItem(data.id)
    }

    render() {
        const {data} = this.props
        return (

            <div className='todoItem'>
                <input id={data.id} type="checkbox"
                       checked={data.isDone} onChange={this.handleCheck}/>
                <p key={data.id} className={data.isDone ? 'isDone' : ''}>{data.value}</p>
                <button key="delete" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }


}

export default Item;
