import {FilterBoard} from "./filterBoard";
import React, {memo, useState} from "react";
import {config} from "../../../../config/locales/en";
import {useSelector} from "react-redux";
import {StateType} from "../searchForm";

export const RoomsBlock = memo(() => {
    const {subtitles: {filterBoard: {adults, children, rooms}}} = config;
    const adultsCounter = useSelector((state: StateType) => state.booking.guestData.adultsValue)
    const childrenCounter = useSelector((state: StateType) => state.booking.guestData.childrenValue);
    const roomsCounter = useSelector((state: StateType) => state.booking.guestData.roomsValue)
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return <div className="form__guest-block">
        <p className="form__guest-counter" onClick={handleClick}>
            {adultsCounter} {adults} — {childrenCounter} {children} — {roomsCounter} {rooms}
        </p>
        {isOpen && <FilterBoard/>}
    </div>
})