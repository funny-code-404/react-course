import { useState, ChangeEvent, ChangeEventHandler, ReactNode } from "react";
import "./style.scss";
import { data } from "../../../main/home-guests-love/data";
import { Props } from "../../../main/home-guests-love";



const Form = () => {
    const [hotels, setFilteredHotel] = useState(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilteredHotel(data.filter(hotel => hotel.name.includes(e.target.value)))
    }


    return(
        <div className="form__container">
            <form>
                <div className="form__title">
                    <p className="form__title-search">Your destination or hotel name</p>
                    <p>Check-in — Check-out</p>
                </div>
                <div className="form__inputs">
                    <input type="text" onChange={handleChange} placeholder="Search..."/>
                </div>
            </form>
                <div className="availabe-hotels__container">
                    <h2 className="hotel-list__title">Availabe Hotels</h2>
                    <ul className="hotel-list__hotels">
                        {hotels.map(({ id, name, city, country, imageUrl }: Props): ReactNode => {
                            return (
                                <li key={id} className="availabe-hotels">
                                    <img src={imageUrl} alt={name} className="hotel__img" />
                                    <p className="hotel__name">{name}</p>
                                    <p className="hotel__location">{city}, {country}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>    
 

        </div>
    )
}

export default Form;