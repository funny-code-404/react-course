import React from "react";

import ListItem from "../ListItem";


const url = 'https://jsonplaceholder.typicode.com/posts';

class List extends React.Component {
    state = {
        data: [],
        order: null,
    };

    get getDataList() {
        const { order, data } = this.state;

        return order ? data.reverse() : data;
    }

    handleSort = () => 

    async fetchData() {
        const res = await fetch(url);
        const data = await res.json();

        this.setState = (prevState) => ({
            ...prevState,
            data,
        }));

    }

 

    componentDidMount() {
        this.fetchData();
    }

    render() {

        return <ul>
            {this.getDataList.map(item => (
            <ListItem key={item.id} {...item} />
            ))}
        </ul>;
    }

 
}


export default List;