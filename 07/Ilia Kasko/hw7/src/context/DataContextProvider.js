import React, {Component} from 'react';

import DataContext from "./DataContext";
import Data from "../components/Data";
export const url = 'https://private-anon-928e6d58e3-carsapi1.apiary-mock.com/cars'

class DataContextProvider extends Component {
    state = {
        data:[]
    }

    componentDidMount() {
        fetch(url)
            .then(data => data.json())
            .then((data) => this.setState({data}))
    }

    render() {
        const {data} = this.state
        return (
            <DataContext.Provider value = {data}>
                <div >
                    <Data />
                </div>
            </DataContext.Provider>

        );
    }


}

export default DataContextProvider;
