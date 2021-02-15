import React from 'react';
import './style.css';
import Bbq from './img/bbq.png';
import Hunter from './img/hunter.png';
import Visa from './img/visa.png';
import World from './img/world.png';

class Info extends React.Component {
    // dataInfo = ['Визовая поддержка клиентов', 'Направления по всему миру', 'Сопровождение опытными гидами', 'Полное обеспечение снаряжением'];

    // renderItem() {
    //     const InfoElements = this.dataInfo.map((text, index) => {
            
    //         return (
    //             <div className="content__item">
    //                 <p key={index} className="item__text">{text}</p>
    //             </div>
    //         )
    //     })
    //     return InfoElements;
    // }

    render() {
        const {title, text1, text2, text3, text4} = this.props;

        return(
            <div className="footer__info">
                <h2 className="info__title">{title}</h2>
                <div className="info__content"> 
                    <div>
                        <div className="img__content"> 
                            <img src={Visa} alt="visa" className="img__item item__img"/>
                        </div>
                        <div className="content__item">
                            <p className="item__text">{text1}</p>
                        </div>
                    </div>
                    <div>
                        <div className="img__content"> 
                            <img src={World} alt="world" className="img__item"/>
                        </div>
                        <div className="content__item">
                            <p className="item__text">{text2}</p>
                        </div>
                    </div>
                    <div>
                        <div className="img__content"> 
                            <img src={Hunter} alt="hunter" className="img__item"/>
                        </div>
                        <div className="content__item">
                            <p className="item__text">{text3}</p>
                        </div>
                    </div>
                    <div>
                        <div className="img__content img__content_item"> 
                            <img src={Bbq} alt="bbq" className="img__item"/>
                        </div>
                        <div className="content__item">
                            <p className="item__text">{text4}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) 

    }
}

export default Info;