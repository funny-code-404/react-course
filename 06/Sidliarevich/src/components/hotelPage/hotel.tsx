import {Navigation} from "./navigation";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchData} from "../config/fetchData";

export const Hotel = () => {
    const location: any = useLocation();
    const [data, setData] = useState(location.state);
    const [error, setError] = useState<any>(null)
    const params = useParams();
    console.log(params)

   useEffect(() => {
       if (!location.state) {
            fetchData(`https://fe-student-api.herokuapp.com/api/hotels/${params.hotelId}`, setData, setError)
       }
   }, [params.hotelId])

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