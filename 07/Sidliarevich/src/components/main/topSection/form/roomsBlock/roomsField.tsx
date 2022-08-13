import {memo} from "react";
import {config} from "../../../../config/locales/en";
import {useDispatch, useSelector} from "react-redux";
import {addRoomsAction, removeRoomsAction} from "../../../../../redux/dataBooking/actions";
import {StateType} from "../searchForm";

export const RoomsField = memo(() => {
    const {subtitles: {filterBoard: {rooms}}} = config;
    const dispatch = useDispatch();
    const roomsCounter = useSelector((state: StateType) => state.booking.guestData.roomsValue)

    const plusClick = () => {
        if (roomsCounter < 30) dispatch(addRoomsAction(roomsCounter));
    };
    const minusClick = () => {
        if (roomsCounter > 0) dispatch(removeRoomsAction(roomsCounter));
    };

    return <div className="filter-board__field">
        <p className="filter-board__name">{rooms}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={roomsCounter === 0}>-</button>
        <p className="filter-board__counter">{roomsCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={roomsCounter === 30}>+</button>
    </div>
})