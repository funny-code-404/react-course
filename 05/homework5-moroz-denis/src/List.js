import React from 'react';

import ListItemCivilizations from './ListItemCivilizations'

class List extends React.Component {

    state = {
        order: null,
    }

    get dataList() {
        const { data } = this.props;
        const { order } = this.state;
        
        return order ? data.reverse() : data;
        
    }

    handleChange = () => {

        this.setState((prevState) => ({
            ...prevState,
            order: prevState.order === 'asc' ? 'desc' : 'asc'
        }))   
    }
    
    render() {

        const { data } = this.props;

        return (
            <>
                <h1>Civilizations</h1>
                <button onClick = {this.handleChange}>Change order</button>

                <ul>
                    {this.dataList.map(item => <ListItemCivilizations key = {item.id} item = {item}/>)}
                </ul>
           </>
        )
    }
}

export default List;