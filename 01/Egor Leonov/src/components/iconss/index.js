import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './style.css'


class Icons extends React.Component{
    render() {
        return(
            <div className='icons'>
                <div className='twitter  free'>
                <i class="fab fa-twitter"></i>
                </div>
                <div className='facebook free'>
                <i class="fab fa-facebook-f"></i>
                </div>
                <div className='instagramm free'>
                <i class="fab fa-instagram" _mstvisible="2"></i>
                </div>
            </div>
        )
    }
}
export default Icons