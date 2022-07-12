import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {locationType} from "../components/hotelPage/hotel";

export const useRouteHotel = (params: any) => {
    const location: locationType = useLocation();
    const [data, setData] = useState(location.state);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        if (!location) {
            const request = async () => {
                try {
                    let response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels/${params.hotelId}`);
                    response = await response.json();
                    setData(response)
                } catch (error) {
                    if (error instanceof Error) {
                        setError(error.message)
                    }
                }
            }
        }
    }, [params.hotelId]);

    return {data, error}
}