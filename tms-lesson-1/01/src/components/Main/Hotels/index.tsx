import { ReactNode } from "react";
import { data } from "./data";

type Props = {
    id: string,
    name: string,
    city: string,
    country: string,
    imageUrl: string,
}

const hotelsTitle: string = 'Homes guests loves';

export const Hotels = () => {
    return (
    <div className="hotels">
        <div className="hotels__container">
            <h2 className="hotels__title">{hotelsTitle}</h2>
            <ul className="hotels__content">
                {data.map(({ id, name, city, country, imageUrl }: Props): ReactNode => {
                    return (
                        <li key={id} className="hotel">
                            <img src={imageUrl} alt={name} className="hotel__photo" />
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