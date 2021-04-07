import React from 'react'
import One from '../img/one.png'
import Two from '../img/two.png'
import Three from '../img/three.png'
import Four from '../img/four.png'
import Five from '../img/five.png'
import './style.css'


class ImageAnimals extends React.Component{
    render(){
        return(
            <div className='imageanimals'>
            <div className='one'><img src={One} alt={'One'}></img></div>
            <div className='one'><img src={Two} alt={'Two'}></img></div>
            <div className='one'><img src={Three} alt={'Three'}></img></div>
            <div className='one'><img src={Four} alt={'Four'}></img></div>
            <div className='one'><img src={Five} alt={'Five'}></img></div>
            </div>
        )
    }
}
export default ImageAnimals