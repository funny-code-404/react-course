import React from 'react'

import { Link } from 'react-router-dom'

class ListItem extends React.PureComponent {

    render() {

        const { item, endpoint } = this.props;

        const civilization = <li><Link to = {`/civilization/${item.id}`}>{item.name}</Link></li>;
        const structure = <li><Link to = {`/structure/${item.id}`}>{item.name}</Link></li>;
        const unit = <li><Link to = {`/unit/${item.id}`}>{item.name}</Link></li>;
        const technology = <li><Link to = {`/technology/${item.id}`}>{item.name}</Link></li>

        return (
            endpoint === 'civilizations' ? 
            civilization :

            endpoint === 'structures' ? 
            structure :
            
            endpoint === 'units' ?
            unit :
            
            endpoint === 'technologies' ?
            technology : null
        )
    }
}

export default ListItem;


