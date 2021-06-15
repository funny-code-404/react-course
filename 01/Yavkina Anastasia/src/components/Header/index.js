import "./styles.css";
import React from "react";

class Header extends React.Component {
    render() {
      return (
        <header>
        <div className="container">
            <div className="header_nav">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#">Наши проекты</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Новости</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header_main">
                <p>Передовая IT студия</p>
                <h1>Мы создаем легкие решения сложных задач и проблем</h1>
                <a href="#">Наши проекты</a>
            </div>
        </div>  
        </header>       
      );
    }
  }
  
  export default Header; 