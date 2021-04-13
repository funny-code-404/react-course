import React from 'react';
import ReactDOM from 'react-dom';
import ShowForm from './showForm/ShowForm'
import { useState } from 'react'
import Rone from './RenderProps/Rone'
import Rtwo from './RenderProps/Rtwo'
import Rthree from './RenderProps/Rthree'


const TotalApp = () => {
   return (
      <>
         <Rone />
         <Rtwo />,
         <Rthree />
      </>
   )
}


export default TotalApp