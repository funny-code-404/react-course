import ApiService from "../../API/ApiService";
import store from "../../store/store";
import { convertToParamsObject } from "../../utils/utils";
import { actionSetSearch } from "../searchBar/actions";
import
    {
        actionGetAvailableHotelsFailed,
        actionGetAvailableHotelsRequested,
        actionGetAvailableHotelsSucceed,
        actionGetPopularHotelsFailed,
        actionGetPopularHotelsRequested,
        actionGetPopularHotelsSucceed
    } from "./actions";

export const getPopularHotels = () => async (dispatch: any) => {
    dispatch(actionGetPopularHotelsRequested());

    try {
        const response = await ApiService.getPopularHotels();
        dispatch(actionGetPopularHotelsSucceed(response.data));
    } catch (error: any) {
        dispatch(actionGetPopularHotelsFailed(error));
    }
};

export const getAvailableHotels = (search?: string) => async (dispatch: any) => {
    dispatch(actionSetSearch(search));
    const { searchBar } = store.getState()
    dispatch(actionGetAvailableHotelsRequested());

    try {
        const response = await ApiService.getAvailableHotels(convertToParamsObject(searchBar));
        dispatch(actionGetAvailableHotelsSucceed(response.data));
    } catch (error: any) {
        dispatch(actionGetAvailableHotelsFailed(error));
    }
};