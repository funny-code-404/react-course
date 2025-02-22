import {useFetchData} from "./usefetchData";
import {useSelector} from "react-redux";
import {StateType} from "../components/main/topSection/form/searchForm";
import {useEffect} from "react";
import {
    actionGetPopularHotelsRequest,
    actionGetPopularHotelsRequestFailed,
    actionGetPopularHotelsRequestSucceed
} from "../redux/dataPopularHotels/actions";

export const useRequestPopularHotels = () => {
    const fetchData = useFetchData();
    const data = useSelector((state: StateType) => state.popularHotels.data);
    const error = useSelector((state: StateType) => state.popularHotels.error);

    useEffect(() => {
        if (data === null) {
            fetchData("https://fe-student-api.herokuapp.com/api/hotels/popular",
                actionGetPopularHotelsRequest,
                actionGetPopularHotelsRequestSucceed,
                actionGetPopularHotelsRequestFailed)
        }
    }, [data, fetchData]);

    return {data, error}
}