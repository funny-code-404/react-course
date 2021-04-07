import React from 'react'
import SkyOne from '../img/sky2.png'
import SkyTwo from '../img/sky.png'
import './style.css'

class ImageClouds extends React.Component{
    render(){
        return(
            <div className='clouds'>
                <img className='skyone' src={SkyOne} alt={'SkyOne'}></img>
               <img className='skytwo' src={SkyTwo} alt={'SkyTwo'}></img>
               <img className='skythree' src={SkyTwo} alt={'SkyTwo'}></img>
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
        )
    }
}
export default ImageClouds