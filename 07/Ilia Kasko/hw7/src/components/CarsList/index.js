import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Car from '../Car'
import React, {Component} from 'react';
import { useHistory } from 'react-router'



import './style.css'

const CarsList = (props) => {


        const history = useHistory()
        const {data} = props
        const handleClick = (e) => {
            const id = e.target.id
            history.push(`/${id}`)
        }
        return (
            <div className='navigation'>
                {data.map((car) =>(
                <Link id ={car.id} to={{
                    pathname: '/' + car.id,
                    data: data[car.id],
                    onClick: handleClick
                }}
                >{car.make.toUpperCase() + ' ' + car.model.toUpperCase() }</Link>
                )
            )}
            </div>

        )


}

export default CarsList;