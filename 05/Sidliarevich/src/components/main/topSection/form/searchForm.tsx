import React, {useContext} from "react";
import { DateBlock } from "./dateBlock";
import { DataContext } from "../../../context/dataContext";
import {RoomsBlock} from "./roomsBlock/roomsBlock";
import {BookingContextProvider} from "../../../context/bookingContextProvider";

export const SearchForm = () => {
    const {value, handleChange, handleSubmit} = useContext(DataContext);


    return <form className="form" onSubmit={handleSubmit}>
        <input className="form__input-destination" value={value} onChange={handleChange} type="text" placeholder="Search..."/>
        <DateBlock />
        <BookingContextProvider>
            <RoomsBlock/>
        </BookingContextProvider>
        <button className="form__button" >Search</button>
    </form>
}

