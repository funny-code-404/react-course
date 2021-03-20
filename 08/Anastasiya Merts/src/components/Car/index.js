import React, { useContext, } from 'react'
import DataContext from '../../context/DataContext';
import { useParams } from 'react-router-dom';
import { CarInfo, NameProp } from '../styles';
import {Error} from '../../components';

const Car = () => {
    const data = useContext(DataContext);
    const { id } = useParams();
    
    let name, price, power, img;

    let i = 0;

    const getCarInfo = (id) => {
        data?.forEach(item => {
            if(item.id === Number(id)) {
                name = item.name;
                price = item.avg_price;
                power = item.avg_horsepower;
                img = item.img_url;
                i++
            }
        });
        console.log("Bool", Boolean(0));
    }

    getCarInfo(id);

    return (
        // Boolean(i) && <CarInfo>
        //     <p><NameProp>Brand:</NameProp> {name}</p>
        //     <p><NameProp>Price:</NameProp> {price}</p>
        //     <p><NameProp>Power:</NameProp> {power}</p>
        //     <img src={img} alt={name}/>
        // </CarInfo>
        Boolean(i) ? <CarInfo>
            <p><NameProp>Brand:</NameProp> {name}</p>
            <p><NameProp>Price:</NameProp> {price}</p>
            <p><NameProp>Power:</NameProp> {power}</p>
            <img src={img} alt={name}/>
        </CarInfo>
        : <Error />
    
    );
}

export default Car;