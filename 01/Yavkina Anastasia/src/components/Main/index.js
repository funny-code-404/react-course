import "./styles.css";
import React from "react";
import icon from "../img/icon.png";
import main from "../img/main.png"

class Main extends React.Component {
    render() {
      return (
        <main>
        <div className="container">
            <div className="section1">
                <h2>Мы создаем мобильные приложения для крупных корпораций</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus consequatur magni culpa quia minus, earum officia in magnam illum facere.</p>
                <div className="row">
                    <div className="item">
                        <img src= {icon}/>
                        <div className="text">
                            <h3>Создание сайта</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus.</p>
                        </div>
                    </div>
                    <div className="item">
                    <img src= {icon}/>
                        <div className="text">
                            <h3>Создание сайта</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus.</p>
                        </div>
                    </div>
                    <div className="item">
                    <img src= {icon}/>
                        <div className="text">
                            <h3>Создание сайта</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, natus.</p>
                        </div>
                    </div>
                </div>
                <a href="#">Все услуги</a>

            </div>

            <div className="section2">
                <div className="row2">
                    <h2>Высокие стандарты разработки</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque a ipsum mollitia ducimus tenetur, omnis error nulla deleniti vel non quos dolor architecto suscipit dolore praesentium velit deserunt reiciendis? Aspernatur.</p>
                    <a href="#">Подробнее о компании</a></div>
                <img src={main}/>
            </div>
        </div>
    </main>
      );
    }
  }
  
  export default Main; 