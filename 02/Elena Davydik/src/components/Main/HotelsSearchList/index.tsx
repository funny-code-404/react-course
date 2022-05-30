import { ReactNode} from "react";

type Hotel = {
    id: string,
    name: string,
    city: string,
    country: string,
    imageUrl: string,
}

type Props = {
    data: Hotel[],
}

export const HotelsSearchList = ({data}: Props) => (
    <div className="container">
        {data.length? 
            <ul className="hotels__content">
                {data.map(({ id, name, city, country, imageUrl }: Hotel): ReactNode => {
                    return (
                        <li key={id} className="hotel">
                            <img src={imageUrl} alt={name} className="hotel__photo" />
                            <p className="hotel__name">{name}</p>
                            <p className="hotel__location">{city}, {country}</p>
                        </li>
                    )
                })}
            </ul> : 
        <h3 className="searchForm__not-found-title">Hotel not found.</h3>
        }
    </div>
)
