import {useSelector} from "react-redux";
import {StateType} from "./main/topSection/form/searchForm";

export const Preloader = () => {
    const availableHotelsLoading = useSelector((state: StateType)=>state.hotels.isLoading);
    const popularHotelsLoading = useSelector((state: StateType)=>state.popularHotels.isLoading);
    const loading = availableHotelsLoading || popularHotelsLoading;

    return loading ? (
        <div className="preloader">
            <div className="loader"></div>
        </div>
    ) : null
}