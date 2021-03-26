import React from 'react'
import { useState, useEffect} from 'react';

const  RenderCar = (props) => {
   const { cars } = props
   const [arrCar, setArrcar] = useState([])

   useEffect(() => {
      function fetchData() {
         setArrcar(cars)
       }
      fetchData();
      });

   console.log('arrCar', arrCar)   

   return (
      <>
         {arrCar.map((item, index) => {
         return (
            <div>
               <ul>
                  <li>{++index}</li>
                  <li>{item.name}</li>
                  <img src={item?.img_url} alt='logo' />
               </ul>   
            </div>
         )})}
      </>
    );
};

export default RenderCar;

