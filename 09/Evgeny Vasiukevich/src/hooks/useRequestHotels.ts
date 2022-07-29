import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetAvailableHotelsRequested, actionGetPopularHotelsRequested } from "../redux/hotels/actions";
import { availableHotelsSucceedSelector, popularHotelsSucceedSelector } from "../redux/hotels/selectors";

export const useRequestHotels = () => {
    const dispatch = useDispatch();
    const popularHotels = useSelector(popularHotelsSucceedSelector);
    const availableHotels = useSelector(availableHotelsSucceedSelector);

    useEffect(() => {
        if (availableHotels === null) {
            dispatch(actionGetAvailableHotelsRequested());
        };

        if (popularHotels === null) {
            dispatch(actionGetPopularHotelsRequested());
        };

    }, [dispatch, availableHotels, popularHotels])

    return { availableHotels, popularHotels };
}