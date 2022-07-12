import {config} from "../../../../config/locales/en";
import {useDispatch, useSelector} from "react-redux";
import {addChildrenAction, removeChildrenAction} from "../../../../../redux/dataBooking/actions";
import {StateType} from "../searchForm";

export const ChildrenField = () => {
    const {subtitles: {filterBoard: {children}}} = config;
    const dispatch = useDispatch();
    const childrenCounter = useSelector((state: StateType) => state.booking.guestData.childrenValue)

    const plusClick =() => {if (childrenCounter < 10) dispatch(addChildrenAction(childrenCounter))};
    const minusClick = () => {if (childrenCounter > 0 ) dispatch(removeChildrenAction(childrenCounter))};

    return <div className="filter-board__field">
        <p className="filter-board__name">{children}</p>
        <button className="filter-board__btn-remove" onClick={minusClick} disabled={childrenCounter === 0}>-</button>
        <p className="filter-board__counter">{childrenCounter}</p>
        <button className="filter-board__btn-add" onClick={plusClick} disabled={childrenCounter === 10}>+</button>
    </div>
}
