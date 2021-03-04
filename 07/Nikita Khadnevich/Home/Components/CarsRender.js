import React from 'react'
import { useContext } from 'react';
import  DataContext from '../Context/DataContext'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const CarsRender = (props) => {
  const {testCar}= useContext(DataContext)
  console.log('Cars render', props.match)
  console.log("CarRender Data", testCar )

  return (
    <>
    {testCar.map((item, index) => {
      if (props.match.params.id == item.name) {
        return (
          <div className='RenderCar' key={item.id}>
            <p>Бренд: {item.name}</p>
            <p>Мощность: {item.avg_horsepower}</p>
            <p>Средняя цена: {item.avg_price}</p>
            <img src={item.img_url} alt="no logo :(" />
          </div>
          )
        }
      })
    }    
    </>
  )

}

export default CarsRender;


//// Если дата из командной строки равна даьте айди из массива то рендерить это