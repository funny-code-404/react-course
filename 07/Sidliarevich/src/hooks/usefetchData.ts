import {useDispatch} from "react-redux";
import {actionGetHotels} from "../redux/dataHotels/actions";

type DataType = Response | Error | string | any;
type ParamsType = (data?: DataType) => actionGetHotels;
export const useFetchData = () => {
    const dispatch = useDispatch();

    return async (url: string, request: ParamsType, onSuccess: ParamsType, onError: ParamsType) => {
        dispatch(request())
        try {
            let response = await fetch(url);
            response = await response.json();
            dispatch(onSuccess(response));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(onError(error.message))
            }
        }
    }
}