import React, {Component} from 'react';

import AddForm from "./components/AddForm";
import Table from "./components/Table";

class App extends Component{

    state = {
        maxId: 0,
        data: []
    }


    saveState = (state) => {
        localStorage.removeItem('storageData')
        localStorage.removeItem('id')
        localStorage.setItem('storageData', JSON.stringify(state.data))
        localStorage.setItem('id', JSON.stringify(state.maxId))
    }

    componentDidMount() {
        if (this.state.data.length === 0) {
            const data = localStorage.getItem('storageData') ? JSON.parse(localStorage.getItem('storageData')) : []
            const maxId = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : []
            this.setState({ maxId, data })
        }
    }

    handleClick = (value) => {
        this.addItem(value)
    }

    addItem(value) {
        const {data, maxId} = this.state
        data.push({id: maxId, value: value, isDone: false})
        this.setState(()=>({
            maxId: maxId+1,
            data: data
        }),
        () => {
            this.saveState(this.state)
        })

    }

    handleDelete = (id) => {
        const {data} = this.state
        const newArr = data.filter(item => item.id!== id )
        this.setState((prevState)=>({
            ...prevState,
            data: newArr
        }),
            () => {
                this.saveState(this.state)
            })
    }

    onChecked = (id) => {
        const {data} = this.state
        const idx = data.findIndex((el) => el.id === id);
        const oldItem = data[idx];

        const newItem ={...oldItem,
            isDone: !oldItem.isDone};

        this.setState((prevState)=>({
            ...prevState,
            data: [...data.slice(0, idx),
                newItem,
                ...data.slice(idx+1)]
        }),
            () => {
                this.saveState(this.state)
            })
    }



    render() {
        return (
            <div >
                <AddForm onClick={this.handleClick}/>
                <Table dataModel={this.state} onDelete = {this.handleDelete} onChecked = {this.onChecked}/>
            </div>
        );
    }


}

export default App;
