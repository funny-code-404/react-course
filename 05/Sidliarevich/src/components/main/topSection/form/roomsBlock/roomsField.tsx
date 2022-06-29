import {memo, useContext} from "react";
import {DataContext} from "../../../../context/dataContext";
import {config} from "../../../../config/locales/en";

const {subtitles: {filterBoard: {rooms}}} = config;

export const RoomsField = memo(() => {
    const {roomsCounter, setRoomsCounter} = useContext(DataContext);

    const plusClick = () => {
        if (roomsCounter < 30) setRoomsCounter(roomsCounter + 1)
    };
    const minusClick = () => {
        if (roomsCounter > 0) setRoomsCounter(roomsCounter - 1)
    };

    return <div className="filter-board__field">
        <p className="filter-board__name">{rooms}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={roomsCounter === 0}>-</button>
        <p className="filter-board__counter">{roomsCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={roomsCounter === 30}>+</button>
    </div>
})