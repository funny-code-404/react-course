import React, {ChangeEvent, FormEvent, memo, useEffect} from "react";
import {DateBlock} from "./dateBlock";
import {RoomsBlock} from "./roomsBlock/roomsBlock";
import {useFetchData} from "../../../../hooks/usefetchData";
import {buildUrl} from "../../../config/buildUrl";
import {useDispatch, useSelector} from "react-redux";
import {
    actionGetHotelsRequest,
    actionGetHotelsRequestFailed,
    actionGetHotelsRequestSucceed,
    actionGetInputValue
} from "../../../../redux/dataHotels/actions";

export type StateType = {[key: string]: any}

export const SearchForm = memo(() => {
    const dispatch = useDispatch();
    const fetchData = useFetchData();
    const inputValue = useSelector((state: StateType)=>state.hotels.inputValue);
    const data = useSelector((state: StateType)=>state.hotels.hotelsData);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(actionGetInputValue(event.target.value));
        console.log("pererisovka")
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (inputValue.trim()) {
            fetchData(buildUrl(inputValue), actionGetHotelsRequest, actionGetHotelsRequestSucceed, actionGetHotelsRequestFailed)
            dispatch(actionGetInputValue(""))
        }
    };
    useEffect(() => {
        if (data === null) {
            fetchData(buildUrl(inputValue), actionGetHotelsRequest, actionGetHotelsRequestSucceed, actionGetHotelsRequestFailed)
        }
    }, [data]);


    return <form className="form" onSubmit={handleSubmit}>
        <input className="form__input-destination" value={inputValue} onChange={handleChange} type="text"
               placeholder="Search..."/>
        <DateBlock/>
        <RoomsBlock/>
        <button className="form__button">Search</button>
    </form>
})

