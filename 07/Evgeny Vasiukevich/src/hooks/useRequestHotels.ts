import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import ApiService from "../API/ApiService";
import { actionGetAllHotels, actionGetHotelsFailed, actionGetHotelsRequested, actionGetPopularHotels } from "../redux/Hotels/actions";
import { hotelsAllHotelsSelector, hotelsFailedSelector, hotelsLoadingSelector, hotelsPopularHotelsSelector } from "../redux/Hotels/selectors";

export const useRequestHotels = () => {
    const dispatch = useDispatch();
    const allHotels = useSelector(hotelsAllHotelsSelector);
    const popularHotels = useSelector(hotelsPopularHotelsSelector);
    const isLoading = useSelector(hotelsLoadingSelector);
    const error = useSelector(hotelsFailedSelector);

    async function fetchPopularHotels() {
        const response = await ApiService.getPopularHotels();
        dispatch(actionGetPopularHotels(response.data));
    };

    async function fetchAllHotels() {
        const response = await ApiService.getHotels('');
        dispatch(actionGetAllHotels(response.data));
    };

    useEffect(() => {
        dispatch(actionGetHotelsRequested());
        if (allHotels === null) {
            fetchAllHotels()
            .catch((error) => {
                dispatch(actionGetHotelsFailed(error))
            })
        };

        if (popularHotels === null) {
            fetchPopularHotels()
            .catch((error) => {
                dispatch(actionGetHotelsFailed(error))
            })
        };

    }, [dispatch, allHotels, popularHotels])

    return { allHotels, popularHotels, isLoading, error };
}