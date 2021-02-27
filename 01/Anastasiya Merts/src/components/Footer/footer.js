import './footer.css';
import { CONTACTS } from './contacts';

export const Footer = () => {
    
    return (
      <footer>
        <div class="container">
            <div class="footer-flex">
                <div class="flex contact">
                    <p>Email</p>
                    <p>Адрес</p>
                </div>
                <div class="flex">
                    <p>{CONTACTS.email}</p>
                    <p>{CONTACTS.address}</p>
                </div>
            </div>
            <div class="footer-flex">
                <div class="flex contact">
                    <p>Телефоны</p>
                </div>
                <div class="flex">
                    <p>{CONTACTS.phoneMts}</p>
                    <p>{CONTACTS.phoneA1}</p>
                </div>
            </div>
        </div>
      </footer> 
    );
  }
  
  export default Footer;