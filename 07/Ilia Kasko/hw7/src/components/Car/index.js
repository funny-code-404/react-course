import { useHistory, useParams, useLocation } from 'react-router'

import React from "react";




const Car = () => {
    const history = useHistory()
    const { data } = useLocation();
    const handleClick = () => history.goBack()

    return (
        <div>
            <p>Марка</p>
            <p>{data.make}</p>
            <p>Модель</p>
            <p>{data.model}</p>
            <p>Год</p>
            <p>{data.year}</p>
            <p>Мощность</p>
            <p>{data.horsepower}</p>
            <p>Цена</p>
            <p>{data.price}</p>
            <img src={data.img_url} width="240" height="320" />

            <button onClick={handleClick}>Назад</button>
        </div>
    )
}

export default Car;