import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = (props) => {
    return (
        <div className='header' >
            <ul >
                {
                    props.menu.map(x =>
                        <li
                            key={x.id}>
                            <NavLink activeClassName="nav_active"
                                exact to={x.path ? x.path : `${props.nav}/${x.id}`}>
                                {x.name}
                            </NavLink>
                        </li>)
                }
            </ul>
            <hr />
        </div>
    )

}

export default NavigationBar