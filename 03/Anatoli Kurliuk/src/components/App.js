import React, {Component} from 'react'
import Form from "./Form"
import Table from "./Table"
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
`

class App extends Component {
    state = {
        store: [],
        car: { brand: "", model: "", year: "", price: "" },
    }

    handleSubmitClick = (data) => {
        this.setState((prevState) => ({
            store: [...prevState.store, data],
            car: { brand: "", model: "", year: "", price: "" },
        }))
    }

    handleTableClick = (data) => {
        this.setState((prevState) => ({
            ...prevState,
            car: { ...data },
        }))
    }

    render() {
        const { store, car } = this.state
        return(
            <Wrap>
                <Table store={store} handleTableClick={this.handleTableClick} />
                <Form data={car} handleSubmitClick={this.handleSubmitClick} />
            </Wrap>
        )
    }
}

export default App;
