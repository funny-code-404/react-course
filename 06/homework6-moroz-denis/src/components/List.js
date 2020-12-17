import React from 'react';

import ListItem from './ListItem'
import '../styles/list.css'

class List extends React.PureComponent {

    render() { 

        const { data, endpoint } = this.props; 
        
        return (
            <ul className = 'list'>
                    {data.map(item => <ListItem key = {item.id} item = {item} endpoint = {endpoint}/>)}
            </ul>
        )
    }   
}

export default List;