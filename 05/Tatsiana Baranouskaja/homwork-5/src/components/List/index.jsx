import React from "react";

import ListItem from "../ListItem";


const url = 'https://jsonplaceholder.typicode.com/posts';
// console.log(url);
class List extends React.Component {
    state = {
        data: [],
        order: null,
    };

  

    get dataList() {
        const { order, data } = this.state;

        return order ? data.reverse() : data;
    }

    handleSort = () => {
        this.setState(prevState => ({
            ...prevState,
            order: prevState.order === 'ask' ? 'desk' : 'ask',
        }));
    };

    async fetchData() {
        const res = await fetch(url);
        const data = await res.json();

        this.setState = (prevState) => ({
            ...prevState,
            data,
        });

    }

 

    componentDidMount() {
        this.fetchData();
    }

    render() {
        console.log(this.dataList);
        return (
        <ul>
            <button onClick={this.handleSort}>Sort</button>
            {this.dataList.map(({id, ...rest}) => (
            <ListItem key={id} {...rest}/>
            ))}
        </ul>
        );
    };
 
}


export default List;