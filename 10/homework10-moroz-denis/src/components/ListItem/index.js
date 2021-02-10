import React from 'react'

import { Link } from 'react-router-dom'

class ListItem extends React.PureComponent {

    render() {

        const { name, path, id } = this.props;

        return (
            <li><Link to = {`${path}/${id}`}>{name}</Link></li>
        )
    }
}

export default ListItem;