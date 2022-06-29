import {FilterBoard} from "./filterBoard";
import React, {memo, useContext, useState} from "react";
import {DataContext} from "../../../../context/dataContext";
import {config} from "../../../../config/locales/en";

const {subtitles: {filterBoard: {adults, children, rooms}}} = config;

export const RoomsBlock = memo(() => {
    const {childrenCounter, adultsCounter, roomsCounter} = useContext(DataContext);
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