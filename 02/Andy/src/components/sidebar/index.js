import React, { Component } from 'react';

import './style.scss';


class Sidebar extends Component {
    render() {
        const { title, sidebars } = this.props;
       
        const  isNotEmpty = Boolean(sidebars.length);

       
        return(
            <div className='sidebar'>
                <h1>{title}</h1>
                {isNotEmpty && (
                    <ul>
                        {
                            sidebars.map(item => <li key={item.id}><a href='#top'>{item.label}</a></li>)
                        }
                    </ul>
                )}
            </div>
        );
    }
}

export default Sidebar;