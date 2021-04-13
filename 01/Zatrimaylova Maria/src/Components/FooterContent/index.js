import React from 'react';
import './style.css'
import TwitterImg from './img/Twitter.png'
import Facebook from './img/Facebook.png'
import Vk from './img/Vk.png'
import Instagram from './img/Instagram.png'

class FooterContent extends React.Component {
    render() {
        const { text1, text2, text3, text4, span1, span2, span3, span4 } = this.props;

        return (
            <div className="container__footer">
                <div className="footer__contacts footer__item">
                    <div className="contacts__item">
                        <span className="item__span">{span1}</span>
                        <p>{text1}</p>
                    </div>

                    <p className="contacts__item">
                        <span className="item__span">{span2}</span>
                        <p>{text2}</p>
                    </p>
                </div>

                <div className="footer__phone footer__item">
                    <span className="item__span">{span3}</span>

                    <div>
                        <p className="phone__item">{text3}</p>
                        <p className="phone__item">{text4}</p>
                    </div>
                </div>

                <div className="footer__social footer__item">
                    <span className="item__span">
                        {span4}
                    </span>

                    <div className="social__links">
                        <a href="#">
                            <img src={Instagram} alt="Instagram icon" className="img"/>
                        </a>

                        <a href="#">
                           <img src={Vk} alt="Vk icon" className="img"/>
                        </a>

                        <a href="#">
                            <img src={TwitterImg} alt="Twitter icon" className="img"/>
                        </a>

                        <a href="#">
                            <img src={Facebook} alt="Facebook icon" className="img"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterContent;