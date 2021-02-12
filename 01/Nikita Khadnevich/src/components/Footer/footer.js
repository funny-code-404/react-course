import './styleFooter.css';
import Slogan from './../Midblock/Slogan/slogan'
import Logo from './../Header/Logo/logo'

const Footer = () => {
   return (
      <div className='footer'>
         <div className='phoneBlock'>
            <Slogan message='phone:'/>
            <Slogan message='+8-800-755-35-35'/>
         </div>
         <div className='adressBlock'>
            <Slogan message='adress:'/>
            <Slogan message='1-j per. Okrestina, 36A, Minsk'/>
         </div>
         <div className='socialBlock'>
            <Logo className='InstBlock'
            links='https://www.instagram.com/'
               imgLink='https://w7.pngwing.com/pngs/464/414/png-transparent-instagram-logo-the-factory-kitchen-social-media-facebook-instagram-logo-retail-social-media-marketing-business.png' />
            <Logo className='FbBlock'
            links='https://www.fb.com/'
               imgLink='https://www.kindpng.com/picc/m/32-326347_youtube-facebook-art-painting-icon-facebook-vector-black.png' /> 
         </div>
      </div>
   )
}
export default Footer

