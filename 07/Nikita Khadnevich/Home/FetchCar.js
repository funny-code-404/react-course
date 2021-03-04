import React from 'react'
import { useState, useEffect} from 'react';

const  FetchCar = (props) => {
   const mydata = 'https://private-anon-9d7ceddbb7-carsapi1.apiary-mock.com/manufacturers'
   const [cars, setCars] = useState([])

   useEffect(() => {
   async function fetchData() {
      const res = await fetch(mydata);
      await res
        .json()
        .then(res => setCars(res))
        .catch(err => (err));
   }
   fetchData();
   }, []);

   const { children } = props
   return (
      <>
         {props.upState(cars)}
         {/* {/* {children(cars)} */}
      </>
    );
};

export default FetchCar;



