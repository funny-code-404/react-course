import "./styles.css";
import React from "react";

class Footer extends React.Component {
    render() {
      return (
        <footer>
            <div className="container">
                <div className="section3">
                    <div className="col">
                        <h3>Контактная информация</h3>
                        <ul>
                            <li>
                                <div className="icon"><i className="far fa-envelope"></i> <a href="#">test@test.ru</a></div>
                            </li>
                            <li>
                                <div className="icon"><i className="fas fa-phone-alt"></i> <a href="#">+8 777 555 66 99</a></div>
                            </li>
                            <li>
                                <div className="icon"> <i className="fas fa-map-marker-alt"></i> <a href="#">Москва, Бульвар Ленина 33</a></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Основные ссылки</h3>
                        <ul>
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Наши проекты</a>
                            </li>
                            <li>
                                <a href="#">Наши услуги</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Наши проекты</h3>
                        <ul>
                            <li>
                                <a href="#">РосНано</a>
                            </li>
                            <li>
                                <a href="#">Сколково</a>
                            </li>
                            <li>
                                <a href="#">Проект "Восток"</a>
                            </li>
                            <li>
                                <a href="#">ТЭЦ Калининграда</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Социальные сети</h3>
                        <ul>
                            <li>
                                <a href="#">VK.com</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
      );
    }
  }
  
  export default Footer; 