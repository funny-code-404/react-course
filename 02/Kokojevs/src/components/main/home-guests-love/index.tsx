import { ReactNode } from "react";
import { data } from "./data";
import "./styles.scss"

export type Props = {
    id: string,
    name: string,
    city: string,
    country: string,
    imageUrl: string,
}

export const HotelList = () => {
    return (
    <div className="hotel-list">
        <h2 className="hotel-list__title">Homes guests loves</h2>
        <ul className="hotel-list__hotels">
            {data.map(({ id, name, city, country, imageUrl }: Props): ReactNode => {
                return (
                    <li key={id} className="hotel">
                        <img src={imageUrl} alt={name} className="hotel__img" />
                        <p className="hotel__name">{name}</p>
                        <p className="hotel__location">{city}, {country}</p>
                    </li>
                )
            })}
        </ul>
    </div>   
    )    
}