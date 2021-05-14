import React from 'react';
import App from '../App'
import back from './back.mp4'
import classes from './BackgroundVideo.module.css';

const AppWithBackgroundVideo = () => {
   const videoSource = back
   return (
      <div className={classes.Container} >
         <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
               <source src={videoSource} type="video/mp4" />
         </video>
         <div className={classes.Content}>
            <div className={classes.SubContent} >
               <App />
            </div>
         </div>      
      </div>
   )
}

export default AppWithBackgroundVideo