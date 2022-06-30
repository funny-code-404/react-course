import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableHotels, getPopularHotels } from "../redux/hotels/middlewares";
import { availableHotelsSucceedSelector, popularHotelsSucceedSelector } from "../redux/hotels/selectors";

export const useRequestHotels = () => {
    const dispatch = useDispatch();
    const popularHotels = useSelector(popularHotelsSucceedSelector);
    const availableHotels = useSelector(availableHotelsSucceedSelector);

    useEffect(() => {
        if (availableHotels === null) {
            dispatch(getAvailableHotels() as any)
        };

        if (popularHotels === null) {
            dispatch(getPopularHotels() as any);
        };

    }, [dispatch, availableHotels, popularHotels])

    return { availableHotels, popularHotels };
}