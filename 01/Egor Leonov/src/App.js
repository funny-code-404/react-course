import React from 'react'
import './style.css'
import Box from './components/box'
import Fix from './components/fix'
import ImageAnimals from './components/imageanimals'
import ImageClouds from './components/imgClouds'
import Icons from './components/iconss'

class App extends React.Component {
  render(){
  return (
    <div className='container'>
      <div className='text'>
       <Icons/>       
       <ImageClouds/>
        <Box/>
        <ImageAnimals/>
         </div>
         <Fix/>  
      </div>
  )
}
}

export default App;
