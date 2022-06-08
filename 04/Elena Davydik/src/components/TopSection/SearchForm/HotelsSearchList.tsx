import { ReactNode} from "react";
import { THotel } from "../../Types/types";

const searchFormTitle = 'Available hotels';

type Props = {
    data: THotel[],
}

export const HotelsSearchList = ({data}: Props) => {
    if (data.length > 0) { return (
    <div className="searchForm__list block">
        <div className="container">
        <h2 className="title">{searchFormTitle}</h2>
            <ul className="hotels__content">
                {data.map(({ id, name, city, country, imageUrl }: THotel): ReactNode => {
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
        
    </div>)
    } else {
        return (
            <div className="searchForm__list block">
                <div className="container">
                    <h3 className="searchForm__not-found-title">Hotel not found.</h3>
                </div>
            </div>
        )
    }
}
