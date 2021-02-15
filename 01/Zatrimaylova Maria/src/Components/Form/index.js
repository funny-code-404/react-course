import React from 'react';
import './style.css'

class Form extends React.Component {
    render() {
        const { title } = this.props;
        return (
            <div className="header__form">
                <p className="form__title">{title}</p>
                <form className="form">
                    <label htmlFor="text" ></label>
                    <input id="text" placeholder='Куда' className="form__item form_element"/>

                    <label htmlFor="text2" ></label>
                    <input id="text2" placeholder='Когда' className="form__items input_element form_element"/>

                    <label htmlFor="text3" ></label>
                    <input id="text3" placeholder='Продолжительность' className="form__items form_element"/>

                    <select name="type" class="form__type" className="form__item form_element">
                        <option value="none" hidden>Тип тура</option>
                        <option value="plane">С перлётом</option>
                        <option value="bus">Автобусный</option>
                        <option value="camping">Кемпинг</option>
                    </select>

                    <button type="submit" class="form__button" >Найти</button> 
                </form>
            </div> 
        )
    }
}

export default Form;