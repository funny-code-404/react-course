import React from 'react';

import './Registration.css'

const Registration = () => {

    return (
        <form className="reg">
            <h1>Регистрация</h1>
            <input placeholder="Фамилия" />
            <input placeholder="Год Рождения" />
            <input placeholder="Номер телефона"/>
            <button>Зарегистрировать</button>
        </form>
    );
}
export default Registration;