import React from 'react'
import { Link } from 'react-router-dom'

const ResultNavigation = (props) => {
    return (
        <div className='menu_link' >
            { Boolean(props.data.length) &&
                <h1>
                    {props.title}
                </h1>
            }
            <ul >
                {Boolean(props.data.length) &&
                    props.data.map(x =>
                        <li
                            key={x.id}>
                            <Link
                                to={`${props.path}/${x.id}`}>
                                {x.name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}
export default ResultNavigation
