import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader, StyledNavlink } from './styles'

const Navigation = (props) => {
    return (
        <>
            <StyledHeader>
                <ul >
                    {
                        props.menu.map(x =>
                            <li
                                key={x.id}>
                                <StyledNavlink>
                                    <NavLink activeClassName="nav_active"
                                        exact to={x.path || `${props.nav}/${x.id}`}>
                                        {x.name}
                                    </NavLink>
                                </StyledNavlink>
                            </li>)
                    }
                </ul>
            </StyledHeader>
            <hr />
        </>
    )

}

export default Navigation