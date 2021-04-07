import React from 'react'
import './style.css'
import Grass from '../img/grass.png'
class Fix extends React.Component{
    render(){
        return(
            <div className="fix">
                <img src={Grass} alt={'logo'}></img>

            </div>
        )
    }
}
export default Fix