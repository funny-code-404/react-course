import './styleFooter.css';
import Slogan from './../Midblock/Slogan/slogan'
import Logo from './../Header/Logo/logo'
import { phoneData, adressData, SocialData } from '../Data/Data'

const Footer = () => {
   return (
      <div className='footer'>
         <div className='phoneBlock'>
            <Slogan message={phoneData.name}/>
            <Slogan message={phoneData.phone}/>
         </div>
         <div className='adressBlock'>
            <Slogan message={adressData.name}/>
            <Slogan message={adressData.adress}/>
         </div>
         <div className='socialBlock'>
            <Logo className='InstBlock'
            links={SocialData.insta}
               imgLink={SocialData.instaImg} />
            <Logo className='FbBlock'
            links={SocialData.fb}
               imgLink={SocialData.fbImg} /> 
         </div>
      </div>
   )
}
export default Footer

