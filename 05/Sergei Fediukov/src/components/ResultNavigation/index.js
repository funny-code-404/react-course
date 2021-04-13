import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const ResultNavigation = ({ data, title, path }) => {
    return (
        <div className='menu_link' >
            { Boolean(data.length) &&
                <h1>
                    {title}
                </h1>
            }
            <ul >
                {Boolean(data.length) &&
                    data.map(x =>
                        <li
                            key={x.id}>
                            <Link
                                to={`${path}/${x.id}`}>
                                {x.name}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
};
ResultNavigation.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}
export default ResultNavigation;
