import './styleFooter.css';
import Slogan from './../Midblock/Slogan/slogan'
import Logo from './../Header/Logo/logo'
export { phoneData, adressData, SocialData } from '../Data/Data'

const Footer = () => {
   return (
      <div className='footer'>
         <div className='phoneBlock'>
            <Slogan message={phoneData.name}/>
            <Slogan message={phoneData.phone}/>
         </div>
         <div className='adressBlock'>
            <Slogan message={adressData.name}/>
            <Slogan message={adressData.adredss}/>
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

