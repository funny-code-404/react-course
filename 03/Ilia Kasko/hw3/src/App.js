import React, {Component} from 'react';

import Form from "./Form";
import Table from "./Table";

class App extends Component{

    id =0

    addData = (value) =>{
        if(value.brand.length === 0 || value.model.length === 0 ||value.year.length === 0 ||value.cost.length === 0){
            this.setState((prevState) => ({
                ...prevState,
                isValid: false
            }))

        }else {
            const newData = {id: this.id++ , value: value}
            this.setState(({data}) => {
                const newArr = data
                newArr.push(newData)
                return {
                    data: newArr
                }
            })
        }

    }

    selectedId = (value) =>{
        this.setState((prevState) => ({
            ...prevState,
            selectId: value,
            isValid: true
        }))
    }

    state ={
        data:[],
        selectId:'',
        isValid: true
    }
    render() {
        const { isValid} = this.state
        return (
            <div>

                <Form item={this.state.data[this.state.selectId]} onClick={this.addData} />
                {!isValid && <p>Не валидно</p>}
                <Table dataModel={this.state} onClick={this.selectedId} />
            </div>
        );
    }


}

export default App;
