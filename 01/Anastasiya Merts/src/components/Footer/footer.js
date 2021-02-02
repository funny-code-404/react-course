import './footer.css';

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
                    <p>wildvacation@gmail.com</p>
                    <p>Немига 5а, офис 18,  Минск</p>
                </div>
            </div>
            <div class="footer-flex">
                <div class="flex contact">
                    <p>Телефоны</p>
                </div>
                <div class="flex">
                    <p>+375 33 888-44-22</p>
                    <p>+375 29 963-85-21</p>
                </div>
            </div>
        </div>
      </footer> 
    );
  }
  
  export default Footer;