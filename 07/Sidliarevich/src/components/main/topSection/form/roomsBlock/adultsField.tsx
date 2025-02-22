import {memo} from "react";
import {config} from "../../../../config/locales/en";
import {addAdultsAction, removeAdultsAction} from "../../../../../redux/dataBooking/actions";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../searchForm";

export const AdultsField = memo(() => {
    const {subtitles: {filterBoard: {adults}}} = config;
    const dispatch = useDispatch();
    const adultsCounter = useSelector((state: StateType) => state.booking.guestData.adultsValue)

    const plusClick = () => {
        if (adultsCounter < 30) dispatch(addAdultsAction(adultsCounter))
    };

    const minusClick = () => {
        if (adultsCounter > 0) dispatch(removeAdultsAction(adultsCounter))
    };

    return <div className="filter-board__field">
        <p className="filter-board__name">{adults}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={adultsCounter === 0}>-</button>
        <p className="filter-board__counter">{adultsCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={adultsCounter === 30}>+</button>
    </div>
})
