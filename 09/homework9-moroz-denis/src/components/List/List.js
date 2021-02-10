import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class List extends React.Component {
  
    static propTypes = {
        dogs: PropTypes.object.isRequired
    };
        
    render() {
        console.log(this.props)
        const { dogs } = this.props.dogs;
        let listOfDogs = [];

        Boolean(dogs) && (listOfDogs = Object.entries(dogs));
        
        return (
            <div>
                <ul>
                {
                    listOfDogs.map((dog, index) => 
                        <li key = {index}>
                            <Link to = {`/dog/${dog[0]}`}><span className ='dog-breed'>{dog[0]}</span></Link> 

                            {
                                Boolean(dog[1].length) && <span className = 'dog-breed-details'>: {dog[1].join(', ')}</span>
                            }
                    </li>)
                }
                </ul>
            </div>
        )
    };
};