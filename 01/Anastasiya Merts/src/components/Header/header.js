import './header.css'
import logo from '../images/logo.png'
import NavigationList from '../navigationList'

export const Header = () => {
  const navigationItems = ["О нас", "Туры", "Визы", "Агентам", "Контакты", "Помощь"];
  return (
    <header>
      <div className="container flex-header">
        <a href="#" className="logo"><img src={logo} alt="logo" /></a>
        <NavigationList items={navigationItems} />
      </div>
    </header>
  );
}

export default Header;