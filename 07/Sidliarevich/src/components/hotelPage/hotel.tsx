import {Navigation} from "./navigation";
import {useParams} from "react-router-dom";
import {useRouteHotel} from "../../hooks/useRouteHotel";

export  type locationType = {[key: string]: any};

export const Hotel = () => {
    const params = useParams();
    const {data, error} = useRouteHotel(params)

    return (
        <div className="container hotel">
            <Navigation/>
            <h2 className="hotel__title">{data?.name}</h2>
            <div className="hotel__hotel-content">
                <img className="hotel__img"
                     src={data?.imageUrl}
                     alt=""/>
                <div className="hotel__text-content">
                    <p className="hotel__subtitle">Destination: {data?.country}</p>
                    <article className="hotel__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni
                        minima molestiae nesciunt quae quaerat sequi similique tempora ut voluptatem! Autem doloremque error
                        magnam minima nesciunt reiciendis, tenetur veniam vero.
                    </article>
                </div>
            </div>
        </div>
    )
}