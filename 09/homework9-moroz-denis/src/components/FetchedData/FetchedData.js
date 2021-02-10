import React from 'react';

import List from '../List';
import BASE_URL from '../../services'

const endpoint = 'breeds/list/all';

export default class FetchedData extends React.Component {

    state = {
        payload: {},
        isLoading: false,
    };
    
    async getData(url) {

        this.setState(prevState => ({
            ...prevState,
            isLoading: true
        }));

        const res = await fetch(url);
        const {message: payload} = await res.json();

        this.setState(prevState => ({
            ...prevState,
            payload,
            isLoading: false 
          })) 
    };
    
    componentDidMount() {
        this.getData(`${BASE_URL}` + `${endpoint}`);
    };

    handleClick = (e) => {
        e.preventDefault();
        const { dispachOnFetchData } = this.props;
        const { payload } = this.state; 
        dispachOnFetchData(payload);
    }

    render() {
        return (
        <>
            <button onClick = {this.handleClick}>Get dogs breeds</button>
            <List/>;
        </>
        )
    };
};

