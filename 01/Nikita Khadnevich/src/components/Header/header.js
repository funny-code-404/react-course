import Menu from './Menu/menu'
import Logo from './Logo/logo'
import './styleHeader.css';


const Header = () => {

   return (
      <div className='header'>
         <Logo className='logoHeader'
         links='#'
         imgLink='https://cdn.freelance.ru/img/portfolio/pics/00/34/10/3412097.jpg?mt=0a3c38dc' />
         <div className='headerMenu'>
            <Menu name='Price' className={`price`}/>
            <Menu name='Our Team' className={`team`}/>
            <Menu name='About US' className={`about`}/>
         </div>   
      </div>
   )
}
export default Header